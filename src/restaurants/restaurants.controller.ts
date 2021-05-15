import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common"
import { restaurants, updateRestaurantsList } from "src/db"
import { Restaurant } from "./restaurants.model"
import { v4 as uuid } from "uuid"
import { RestaurantBodyDto } from "./restaurants.dto"

@Controller('restaurants')
export class RestaurantsController {
    @Get()
    findRestaurants(): Restaurant[] {
        return restaurants
    }

    // @Get('/:id') 
    // findRestaurantsById(@Req() req: Request): Restaurant {
    //     const { params } from req;
    //     return restaurants[0]
    // }

    @Get('/:id')
    // @HttpCode(203)
    findRestaurantsById(@Param('id') id: string): Restaurant | undefined {
        return restaurants.find(restaurant => {
            return restaurant.id === id
        })
    }

    @Post()
    addRestaurant(
        @Body() restaurantBodyDto: RestaurantBodyDto
    ): Restaurant {
        const id = uuid();

        const newRestaurant = {
            id,
            ...restaurantBodyDto
        }

        restaurants.push(newRestaurant);
        
        return newRestaurant;
    }

    @Delete('/:id')
    removeRestaurant(@Param('id') id: string): Restaurant[] {
        const updatedRestaurantsList = restaurants.filter(restaurant => {
            return restaurant.id !== id
        });

        updateRestaurantsList(updatedRestaurantsList)

        return restaurants
    }

    @Put('/:id')
    updateRestaurant(
        @Param('id') id: string,
        @Body() restaurantBodyDto: RestaurantBodyDto
    ): Restaurant {
        let updatedRestaurant;

        const updatedRestaurantsList = restaurants.map(restaurant => {
            if(restaurant.id === id) {
                updatedRestaurant = {
                    id,
                    ...restaurantBodyDto
                }
                return updatedRestaurant
            } else return restaurant
        });

        updateRestaurantsList(updatedRestaurantsList)

        return updatedRestaurant
    }
}