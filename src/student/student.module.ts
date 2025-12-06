import { Module } from '@nestjs/common';
import { StudentSchema } from './student.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Student } from './student.schema';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
    imports: [MongooseModule
        .forFeature([{
            name: Student.name,
            schema: StudentSchema
        }]
    )],
    providers: [StudentService],
    controllers: [StudentController],
})
export class StudentModule {}
