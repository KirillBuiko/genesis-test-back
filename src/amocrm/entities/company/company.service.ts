import { Injectable } from '@nestjs/common';
import { CompanyDTO } from './company.dto';
import { IEntityService } from '../entities.interface';

@Injectable()
export class CompanyService implements IEntityService<CompanyDTO> {
    create() {
        return {
            id: 1
        }
    }
}
