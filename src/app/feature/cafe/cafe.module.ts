import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeRoutingModule } from './cafe-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';
import { CarouselModule } from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [ListComponent, FormComponent, EditComponent, OrdersComponent],
  imports: [
    CommonModule,
    CafeRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TableModule

  ]
})
export class CafeModule { }
