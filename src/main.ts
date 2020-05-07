/*
 * Package Import
 */
import { NestFactory } from '@nestjs/core';

/*
 * Local Import
 */
import { AppModule } from './app.module';

/*
 * Code
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

/*
 * Init
 */
bootstrap();
