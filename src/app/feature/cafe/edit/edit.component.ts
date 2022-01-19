import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productId: number;

  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.routes.snapshot.params.id;
  }

}
