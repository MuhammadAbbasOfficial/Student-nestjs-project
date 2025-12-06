import { Model } from 'mongoose';
import { Student } from './student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student-dto';
import { UpdateStudentDto } from './dto/update-student-dto';


@Injectable()
export class StudentService {

    constructor( @InjectModel(Student.name) private readonly studentModel: Model<Student>) {}

    async insertStudent(
        studentDto : CreateStudentDto
    ) : Promise<Student> {
        const newStudent = new this.studentModel({
            ...studentDto
        });
        return newStudent.save();   
    }


    async getAllStudents() : Promise<Student[]> {
        return this.studentModel.find().exec();
    }


    async getStudentById(id : string) : Promise<Student>{
        const student = await  this.studentModel.findById(id).exec();
        if(!student)
        {
            throw new NotFoundException('Student not found');
        }
        return student;
    }


    async deleteStudentById(id : string) : Promise<{deleted : Boolean}>{

        const result = await this.studentModel.deleteOne({_id : id}).exec();
        if(result.deletedCount === 0)
        {
            throw new NotFoundException('Student not found');
        }
        return { deleted : true };
    }

    async updateStudentById(id : string, updateData : Partial<UpdateStudentDto>) 
    : Promise<UpdateStudentDto>{
        const updatedStudent = 
        await this.studentModel
        .findByIdAndUpdate(id, updateData, { new : true}).exec();
        if(!updatedStudent)
        {
            throw new NotFoundException('Student not found');
        }   
        return updatedStudent;
    }



}
