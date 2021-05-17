import { Module } from '@nestjs/common';
import { StudentController } from "../student/student.controller"

@Module({
  imports: [],
  controllers: [StudentController]
})
export class AppModule {}
