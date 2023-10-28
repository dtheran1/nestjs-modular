import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';

@Module({
    controllers: [ProductsController, CategoriesController],
    providers: [ProductsService],
    exports: [],
    imports: [],
})
export class ProductsModule {}
