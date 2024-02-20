import { Injectable } from '@nestjs/common';
import { LeadService } from './lead/lead.service';
import { EntitiesServiceType } from './entities.interface';
import { CompanyService } from './company/company.service';
import { ContactService } from './contact/contact.service';

@Injectable()
export class EntitiesService {
    constructor(
        private leadService: LeadService,
        private companyService: CompanyService,
        private contactService: ContactService) { }

    nameToService: { [name in keyof EntitiesServiceType]: EntitiesServiceType[name] } = {
        lead: this.leadService,
        company: this.companyService,
        contact: this.contactService
    }

    getEntityService<EN extends keyof EntitiesServiceType>(entityName: EN): EntitiesServiceType[EN] | null {
        return this.nameToService[entityName] ?? null;
    }
}
