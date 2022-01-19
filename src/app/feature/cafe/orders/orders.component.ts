import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CafeService } from 'src/app/core/service/cafe.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders = [];


  constructor(private cafeService: CafeService, private router:Router, private activated: ActivatedRoute) { }

  headers: String[] = ['id', 'name', 'product']

  ngOnInit(): void {
    this.cafeService.all().subscribe((value) => {
     this.orders = value;
    })

  }

}
