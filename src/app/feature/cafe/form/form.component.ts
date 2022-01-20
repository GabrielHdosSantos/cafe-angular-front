import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/core/models/Customer/Customer';
import { Product } from 'src/app/core/models/Customer/Product';
import { CafeService } from 'src/app/core/service/cafe.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input()
  productId: number;

  @Output()
  submit = new EventEmitter();
  keys: string[];

  formOrder: FormGroup;

  constructor(
    private routes: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cafeService: CafeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formOrder = this.formBuilder.group({
      id: '',
      name: '',
      cpf: '',
    });

    this.keys = Object.keys(this.formOrder.value).filter((key) => key !== 'id');
  }

  clickOnSubmit() {
    const customer: Customer = this.formOrder.value;
    this.cafeService.addOrder(customer, this.productId).subscribe();
    this.router.navigate(['../../'], {relativeTo: this.routes})
  }
}
