import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchseApi } from '../Constants/api-constants';


@Injectable({
  providedIn: 'root'
})
export class PurchaseorderService {

  constructor(private http: HttpClient) { }

 
  syncPurchaseOrders(): Observable<any> {
    return this.http.post<any>(PurchseApi.GetPurchase, {});
  }

 GetPurchaseOrders(): Observable<any> {
    return this.http.get<any>(PurchseApi.Getorders, {});
  }

}