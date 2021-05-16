import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers = teachers

    getTeachers(): FindTeacherResponseDto[] {
        return teachers
    }

    getTeacherById(id: string): FindTeacherResponseDto {
        return teachers.find(teacher => {
            return teacher.id === id
        })
    }
}
