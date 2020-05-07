/*
 * Package Import
 */
import { Controller, Get, Post, Param, Body } from '@nestjs/common';

/*
 * Local Import
 */
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

/*
 * Code
 */
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(/* @Query() query: ListAllEntitie */): Promise<Cat[]> {
    // @TODO create DTO for `ListAllEntitie`
    // console.log(query.limit)
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} cat 🐱`;
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat 🐱`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This actions removes a #${id} cat 🐱`;
  // }
}
