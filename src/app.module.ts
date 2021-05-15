import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants/restaurants.controller';


@Module({
  imports: [],
  controllers: [RestaurantsController],
})

export class AppModule {}
