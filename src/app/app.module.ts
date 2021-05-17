import { Module } from '@nestjs/common';
import { StudentController } from "../student/student.controller"
import { TeacherController } from "../teacher/teacher.controller"
import { StudentController as StudentTeacherController } from "../teacher/student.controller"

@Module({
  imports: [],
  controllers: [
    StudentController, 
    TeacherController,
    StudentTeacherController 
  ]
})
export class AppModule {}
