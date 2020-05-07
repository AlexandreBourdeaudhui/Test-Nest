/*
 * Package Import
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/*
 * Local Import
 */
import { CatsModule } from './cats/cats.module';

/*
 * Code
 */
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs'),
    CatsModule,
  ],
})
export class AppModule {}
