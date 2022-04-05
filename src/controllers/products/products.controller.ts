import { Controller, Get, Post, Param, HttpStatus, HttpCode, Res, Body, Put, Delete } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {

    constructor( private productsService: ProductsService)

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
        /* response.status(200).send({
            message: 'acción de encontrar un producto por id',
        }); // 👈 Using express directly */
        return this.productsService.findOne(+productId)
    }

    @Post() // 👈 New decorator
    create(@Body() payload: any) {
        /* return {
            message: 'accion de crear',
            payload,
        }; */
        return this.productsService.create(payload);
    }

    @Put()
    update(@Param('id') id: number, @Body() payload: any) {
        return this.productsService.update(id,payload);
    }

    @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }

}
