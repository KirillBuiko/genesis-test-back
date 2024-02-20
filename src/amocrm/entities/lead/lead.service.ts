import { Injectable } from '@nestjs/common';
import { AmoCRMResponse, CreateEntityResponse, IEntityService } from '../entities.interface';
import { LeadDTO } from './lead.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ApiRequestService } from 'src/amocrm/api-request/api-request.service';

@Injectable()
export class LeadService implements IEntityService<LeadDTO> {
    constructor(private httpService: HttpService, private apiRequestService: ApiRequestService) { }

    async create() {
        const response = await firstValueFrom(
            this.httpService.post<AmoCRMResponse<CreateEntityResponse>>(await this.apiRequestService.getBaseURL() + "/api/v4/leads", [{}],
                {headers: await this.apiRequestService.getAuthHeaders()}));

        return response && response.data && ({
            id: response.data._embedded.leads[0].id
        });
    }
}
