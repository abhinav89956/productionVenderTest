import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogdApi } from '../Constants/api-constants';

export interface ApiResponseDto {
  status: number;
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class LogapiService {

  constructor(private http: HttpClient) { }

  // Remove userId, because backend API doesn't take a parameter
  getLogs(): Observable<ApiResponseDto> {
    return this.http.get<ApiResponseDto>(
      LogdApi.getLogs()
    );
  }
}