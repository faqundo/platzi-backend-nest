import { Controller, Get, Post, Param, HttpStatus, HttpCode, Res, Body, Put, Delete } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {

    @Get('products/:id')
    getProduct(@Param() params: any): string {
        return `Product con id: ${params.id}`
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED) // 👈 Using decorator
    getOne(
        @Res() response: Response,
        @Param('productId') productId: string
    ) {
        response.status(200).send({
            message: 'acción de encontrar un producto por id',
        }); // 👈 Using express directly
    }

    @Post() // 👈 New decorator
    create(@Body() payload: any) {
        return {
            message: 'accion de crear',
            payload,
        };
    }

    @Put()
    update(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return id;
    }

}
