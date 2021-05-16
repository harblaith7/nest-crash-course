import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { ValidStudentMiddleware } from "../common/middlewares/validStudent.middleware"

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})

export class StudentsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(ValidStudentMiddleware).forRoutes({
        path: 'students/:studentId',
        method: RequestMethod.GET
      });
      consumer.apply(ValidStudentMiddleware).forRoutes({
        path: 'students/:studentId',
        method: RequestMethod.PUT
      });
    }
  }