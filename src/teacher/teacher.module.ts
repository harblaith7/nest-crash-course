import { Module } from '@nestjs/common';
import { StudentsModule } from '../student/student.module';
import { StudentController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [StudentsModule],
  controllers: [TeacherController, StudentController],
  providers: [TeacherService]
})

export class TeacherModule {}
