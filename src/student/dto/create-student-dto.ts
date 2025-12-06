
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsInt, Min } from 'class-validator';    

export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    age : number;

    @IsNotEmpty()
    @IsString()
    grade : string;

    @IsNotEmpty()
    @IsString()
    city : string;

    @IsOptional()
    @IsEmail()
    email? : string; 
    
}