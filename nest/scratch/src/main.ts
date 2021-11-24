import { Controller, Module, Get } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  get() {
    return 'hi';
  }
}

const controllers = [AppController]

@Module({ controllers })
class AppModule {}

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

main();

