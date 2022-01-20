import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/Customer/Customer';
import { Order } from '../models/Customer/Order';
import { Product } from '../models/Customer/Product';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  baseUrl = `${environment.baseUrl}`;
  orderUrl = `${environment.orderUrl}`;
  customerUrl = `${environment.customerUrl}`;

  constructor(private http: HttpClient) {}

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  allOrder(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.customerUrl}`);

  }

  delete(id: number) {
    return this.http.delete<void>(`${this.orderUrl}/${id}`);
  }

  edit(customer: Customer, product: Product) {
    return this.http.patch(`${this.baseUrl}/${product.id}`, customer);
  }

  addOrder(customer: Customer, id:number) {
    return this.http.post(`${this.orderUrl}/${id}`, customer);
  }
}
