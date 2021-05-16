import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService){}

    @Get()
    getTeachers(): FindTeacherResponseDto[] {
        return this.teacherService.getTeachers()
    }

    @Get('/:id')
    getTeacherById(
        @Param('id') id: string
    ): FindTeacherResponseDto {
        return this.teacherService.getTeacherById(id)
    }

}
