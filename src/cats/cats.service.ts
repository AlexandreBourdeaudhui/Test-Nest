/*
 * Package Import
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

/*
 * Local Import
 */

import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from 'src/cats/interfaces/cat.interface';

/*
 * Code
 */
@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly cats: Model<Cat>) {}

  // Create
  async create(cat: CreateCatDto): Promise<Cat> {
    return new this.cats(cat).save();
  }

  // Find all
  async findAll(): Promise<Cat[]> {
    return this.cats.find();
  }

  // Find one
}
