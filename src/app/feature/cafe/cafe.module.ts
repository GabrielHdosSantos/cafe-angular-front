import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeRoutingModule } from './cafe-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [ListComponent, FormComponent, EditComponent, OrdersComponent],
  imports: [
    CommonModule,
    CafeRoutingModule,
    ReactiveFormsModule
  ]
})
export class CafeModule { }
