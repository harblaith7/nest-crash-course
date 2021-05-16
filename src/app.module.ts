import { Module } from '@nestjs/common';
import { StudentsModule } from './student/student.module';


@Module({
  imports: [StudentsModule]
})

export class AppModule {}
