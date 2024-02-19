import { Injectable } from '@nestjs/common';
import { IEntityService } from '../entities.interface';
import { ContactDTO } from './contact.dto';

@Injectable()
export class ContactService implements IEntityService<ContactDTO> {
    create() {
        return {
            id: 2
        }
    }
}

