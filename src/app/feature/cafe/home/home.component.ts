import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private activated: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToProducts(){
    this.router.navigate(['produtos'])

  }

  goToOrders(){
    this.router.navigate(['orders'])
  }

}
