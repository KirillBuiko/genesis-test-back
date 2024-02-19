import { Controller, HttpCode, Param, Post } from '@nestjs/common';
import { EntitiesName } from 'src/amocrm/entities/entities.interface';
import { EntitiesService } from 'src/amocrm/entities/entities.service';

@Controller('entity')
export class UserEntityController {
    constructor(private entitiesService: EntitiesService) { }

    @Post("create/:name")
    create(@Param() params) {
        const service = this.entitiesService.getEntityService(params.name as EntitiesName);
        if (service) {
            return service.create();
        } else {
            return HttpCode(404);
        }
    }
}
