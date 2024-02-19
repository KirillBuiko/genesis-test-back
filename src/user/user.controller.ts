import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() { }

  @Get(':id')
  getHello(@Param('id') name: string): string {
    return name;
  }
}
