import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';

@Module({
    imports: [EntitiesModule],
    exports: [EntitiesModule]
})
export class AmocrmModule { }