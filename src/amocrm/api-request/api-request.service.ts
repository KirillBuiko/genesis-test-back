import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ApiRequestService {
    constructor(private authService: AuthService) { }

    clientId = "31550986";

    async getBaseURL(): Promise<string> {
        const { base_domain } = await this.authService.getTokens(this.clientId);
        return `https://${base_domain}`;
    }

    async getAuthHeaders(): Promise<AxiosRequestConfig["headers"]> {
        const token = await this.authService.getTokens(this.clientId);
        return {
            Authorization: `Bearer ${token.access_token}`
        }
    }
}
