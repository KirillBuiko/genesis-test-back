import { Injectable } from '@nestjs/common';
import { CompanyDTO } from './company.dto';
import { AmoCRMResponse, CreateEntityResponse, IEntityService } from '../entities.interface';
import { HttpService } from '@nestjs/axios';
import { ApiRequestService } from 'src/amocrm/api-request/api-request.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CompanyService implements IEntityService<CompanyDTO> {
    constructor(private httpService: HttpService, private apiRequestService: ApiRequestService) { }

    async create() {
        const response = await firstValueFrom(
            this.httpService.post<AmoCRMResponse<CreateEntityResponse>>(await this.apiRequestService.getBaseURL() + "/api/v4/companies", [{}],
                {headers: await this.apiRequestService.getAuthHeaders()}));

        return response && response.data && ({
            id: response.data._embedded.companies[0].id
        });
    }
}
