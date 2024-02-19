import { Module } from '@nestjs/common';
import { UserEntityController } from './user-entity.controller';

@Module({
    controllers: [UserEntityController]
})
export class UserEntityModule {}
