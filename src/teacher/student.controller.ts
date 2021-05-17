import { Controller, Get, Put, Param } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string 
    ) {
       return `Get All Students That Belong To A Teacher With Id of ${teacherId}`
    }

    @Put('/:studentId',)
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ) {
        return `Update Student With Id Of ${studentId} To Teacher With Id Of ${teacherId}`
    }
}
