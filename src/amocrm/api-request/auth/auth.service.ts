import { Injectable } from '@nestjs/common';
import { AuthToken } from './auth.interface';
import { AxiosRequestConfig } from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private httpService: HttpService) { }

    tempTokensStore: { [clientId: string]: AuthToken } = {}
    authToken: AuthToken | undefined = undefined;

    async fetchTokens(clientId: string): Promise<AuthToken> {
        return (await firstValueFrom(this.httpService.get<AuthToken>("https://test.gnzs.ru/oauth/get-token.php", {
            headers: {
                "X-Client-Id": clientId
            }
        }))).data
    }

    async getTokens(clientId: string): Promise<AuthToken> {
        if (!this.tempTokensStore[clientId]) {
            this.tempTokensStore[clientId] = await this.fetchTokens(clientId);
        }
        return this.tempTokensStore[clientId];
    }
}
