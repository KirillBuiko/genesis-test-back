import { Injectable } from '@nestjs/common';
import { AmoCRMResponse, CreateEntityResponse, IEntityService } from '../entities.interface';
import { ContactDTO } from './contact.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ApiRequestService } from 'src/amocrm/api-request/api-request.service';

@Injectable()
export class ContactService implements IEntityService<ContactDTO> {
    constructor(private httpService: HttpService, private apiRequestService: ApiRequestService) { }

    async create() {
        const response = await firstValueFrom(
            this.httpService.post<AmoCRMResponse<CreateEntityResponse>>(await this.apiRequestService.getBaseURL() + "/api/v4/contacts", [{}],
                {headers: await this.apiRequestService.getAuthHeaders()}));
        console.log(response.data._embedded.contacts);
        
        return response && response.data && ({
            id: response.data._embedded.contacts[0].id
        });
    }
}

