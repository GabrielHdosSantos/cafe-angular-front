import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CafeService } from 'src/app/core/service/cafe.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders = [];

  constructor(
    private cafeService: CafeService,
    private router: Router,
    private activated: ActivatedRoute
  ) {}

  headers: String[] = ['Cliente', 'Cafe', 'A pagar'];

  ngOnInit(): void {
    this.cafeService.allOrder().subscribe((value) => {
      this.orders = value;
      console.log(this.orders);
    });
  }

  deleteOrder(orderId:number) {
console.log(orderId)

    this.cafeService.delete(Number(orderId)).subscribe();
    this.orders = this.orders.filter((order) => order.id !== orderId);
  }
}
