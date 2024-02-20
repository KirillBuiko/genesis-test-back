import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { ApiRequestService } from './api-request.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [AuthService, ApiRequestService],
  exports: [ApiRequestService]
})
export class ApiRequestModule { }
