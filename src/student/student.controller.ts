import { Body, Controller, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { FindStudentsResponseDto, CreateStudentDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {

    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudent(): FindStudentsResponseDto[] {
        return this.studentService.getStudents()
    }

    @Get('/:id')
    getStudentById(
        @Param('id') id: string
    ): FindStudentsResponseDto {
        return this.studentService.getStudentById(id)
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ): StudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put('/:id')
    updateStudent(
        @Param('id') id: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto {
        return this.studentService.updateStudent(
            body,
            id
        )
    }

}
