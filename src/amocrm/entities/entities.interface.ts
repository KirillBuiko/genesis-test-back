import { CompanyService } from "./company/company.service";
import { ContactService } from "./contact/contact.service";
import { LeadService } from "./lead/lead.service";

export interface EntitiesServiceType {
    "company": CompanyService,
    "contact": ContactService,
    "lead": LeadService
}

export type EntitiesName = keyof EntitiesServiceType;

export interface AmoCRMResponse<DT> {
    _embedded: {
        contacts?: DT[],
        companies?: DT[],
        leads?: DT[],
    }
}

export interface CreateEntityResponse {
    id: number;
}

export interface IEntityService<CretateDTO> {
    create(data: CretateDTO): Promise<CreateEntityResponse | undefined>
}
