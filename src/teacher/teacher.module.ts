import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService]
})

export class TeacherModule {}
