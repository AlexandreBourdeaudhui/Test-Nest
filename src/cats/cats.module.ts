/*
 * Package Import
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/*
 * Local Import
 */
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatSchema } from './schemas/cat.schema';

/*
 * Code
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
