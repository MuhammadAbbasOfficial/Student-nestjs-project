import { Body, Controller, Get, Post, Delete, Patch, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student-dto';
import { UpdateStudentDto } from './dto/update-student-dto';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService) {}



    @Get()
    getAllStudents(){
        return this.studentService.getAllStudents();
    }

    @Post()
    insertStudent(@Body() body :  CreateStudentDto){
        return this.studentService.insertStudent(body);
    }

    @Post('id')
    findStudentById(@Body('id') id : string){
        return this.studentService.getStudentById(id);
    }

    @Delete('id')
    deleteStudentById(@Body('id') id : string){
        return this.studentService.deleteStudentById(id);
    }

    @Patch('update')
    updateStudentById(
        @Param('id') id : string,
        @Body('updateData') updateData : Partial<UpdateStudentDto>
    ){
        return this.studentService.updateStudentById(id, updateData);
    }



}
