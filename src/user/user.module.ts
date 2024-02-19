import { Module } from '@nestjs/common';
import { UserEntityController } from './user-entity/user-entity.controller';
import { AmocrmModule } from 'src/amocrm/amocrm.module';

@Module({
    imports: [AmocrmModule],
    controllers: [UserEntityController]
})
export class UserModule { }
