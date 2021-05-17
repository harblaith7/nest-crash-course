import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
    @Get()
    getStudent() {
        return "All Students"
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ) {
        return `Get Student Where Id is ${studentId}`
    }

    @Post()
    createStudent(
        @Body() body 
    ) {
        return `Create Student With The Following Data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body
    ) {
        return `Update Student With Id of ${studentId} With Data of ${JSON.stringify(body)}`
    }

}
