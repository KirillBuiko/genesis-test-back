import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [EntitiesModule, HttpModule],
    exports: [EntitiesModule]
})
export class AmocrmModule { }