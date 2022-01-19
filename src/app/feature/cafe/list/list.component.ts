import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/Customer/Product';
import { CafeService } from 'src/app/core/service/cafe.service';
import { CafeDataResolver } from '../cafe-routing.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products = [];

  headers: String[] = ['name', 'description', 'price', 'imageUrl'];

  constructor(private cafeResolver: CafeDataResolver,
    private cafeService: CafeService,
    private route: Router,
    private activated: ActivatedRoute) {}

  ngOnInit(): void {

    this.cafeService.all().subscribe((value) => {
      this.products = value;
    })

  }


  doOrder(id:number){
    this.route.navigate(['editar', id], {relativeTo: this.activated})
  }


}
