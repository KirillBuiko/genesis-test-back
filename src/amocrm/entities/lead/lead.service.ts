import { Injectable } from '@nestjs/common';
import { IEntityService } from '../entities.interface';
import { LeadDTO } from './lead.dto';

@Injectable()
export class LeadService implements IEntityService<LeadDTO> {
    create() {
        return {
            id: 3
        }
    }
}
