import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
    @Get()
    getStudent() {
        return "All Students"
    }

    @Get('/:studentId')
    getStudentById(
        // @Req() req: Request
    ) {
        // return req;
        return "Get Student By Id"
    }

    @Post()
    createStudent() {
        return "Create Student"
    }

    @Put('/:studentId')
    updateStudent() {
        return "Update Student By Id"
    }

}
