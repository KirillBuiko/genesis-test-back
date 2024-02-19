import { Module } from '@nestjs/common';
import { ContactService } from './contact/contact.service';
import { LeadService } from './lead/lead.service';
import { CompanyService } from './company/company.service';
import { EntitiesService } from './entities.service';

@Module({
  providers: [ContactService, LeadService, CompanyService, EntitiesService],
  exports: [EntitiesService]
})
export class EntitiesModule { }
