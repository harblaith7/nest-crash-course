import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentsResponseDto, StudentResponseDto } from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Get()
    getStudents(
        @Param('teacherId') teacherId: string 
    ): FindStudentsResponseDto[] {
       return this.studentService.getStudentsByTeacherId(teacherId)
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherId, studentId)
    }

}







