import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/Customer/Product';
import { CafeService } from 'src/app/core/service/cafe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products = [];

  headers: String[] = ['name', 'description', 'price', 'imageUrl'];
  responsiveOptions: {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
  }[];

  constructor(
    private cafeService: CafeService,
    private route: Router,
    private activated: ActivatedRoute
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];



  }


  ngOnInit(): void {
    this.cafeService.all().subscribe((value) => {
      this.products = value;
    });
  }

  doOrder(id: number) {
    this.route.navigate(['../pedido', id], { relativeTo: this.activated });
  }

}
