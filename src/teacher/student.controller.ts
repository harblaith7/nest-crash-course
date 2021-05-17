import { Controller, Get, Put, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindStudentsResponseDto, StudentResponseDto } from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly studentService: StudentService){}

    @Get()
    getStudents(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string 
    ): FindStudentsResponseDto[] {
        return this.studentService.getStudentsByTeacherId(teacherId)
    }

    @Put('/:studentId',)
    updateStudentTeacher(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): StudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherId, studentId)
    }
}
