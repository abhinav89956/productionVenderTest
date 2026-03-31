import { Component, OnInit } from '@angular/core';
import { LogapiService, ApiResponseDto } from '../../services/logapi.service';

export interface LogItem {
  userId: number;
  controllerName: string;
  actionName: string;
  httpMethod: string;
  requestUrl: string;
  requestBody: any;
  responseBody: string;
  statusCode: number;
  message: string;
}

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  logs: LogItem[] = [];
  loading = true;

  constructor(private logService: LogapiService) {}

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    this.loading = true;

    this.logService.getLogs().subscribe({
      next: (res: ApiResponseDto) => {
        if (res.status === 1 && res.data?.length > 0) {
          this.logs = res.data as LogItem[]; 
        } else {
          this.logs = [];
        }
        this.loading = false;
      },
      error: err => {
        console.error('Error fetching logs:', err);
        this.logs = [];
        this.loading = false;
      }
    });
  }
}