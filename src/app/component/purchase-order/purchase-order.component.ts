import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PurchaseorderService } from '../../services/purchaseorder.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  purchaseForm!: FormGroup;
  orders: any[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private purchaseService: PurchaseorderService
  ) {}

ngOnInit(): void {

  // Pehle orders load karo
  this.loadOrders();

  // Fir form initialize karo
  this.purchaseForm = this.fb.group({
    vendor: [''],
    orderNumber: [''],
    status: ['Open'],
    fromDate: [''],
    toDate: ['']
  });

}
  // GET ORDERS
  loadOrders() {
    this.loading = true;

    this.purchaseService.GetPurchaseOrders().subscribe({
      next: (res: any) => {

        if (res && res.data) {
          this.orders = res.data;
        }

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // SYNC ORDERS
  syncOrders() {
    this.loading = true;

    this.purchaseService.syncPurchaseOrders().subscribe({
      next: (res: any) => {

        if (res && res.data) {
          this.orders = res.data;
        }

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}