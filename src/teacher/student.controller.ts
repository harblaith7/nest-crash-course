import { Controller, Get, Param, Put } from '@nestjs/common';
import { StudentService } from '../student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Get()
    getStudents(

    ) {
       
    }

    @Put('/:studentId')
    updateStudentTeacher(

    ) {
       
    }

}







