import { Module } from '@nestjs/common';
import { ContactService } from './contact/contact.service';
import { LeadService } from './lead/lead.service';
import { CompanyService } from './company/company.service';
import { EntitiesService } from './entities.service';
import { HttpModule } from '@nestjs/axios';
import { ApiRequestModule } from '../api-request/api-request.module';

@Module({
  imports: [HttpModule, ApiRequestModule],
  providers: [ContactService, LeadService, CompanyService, EntitiesService],
  exports: [EntitiesService]
})
export class EntitiesModule { }
