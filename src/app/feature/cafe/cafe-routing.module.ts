import { Injectable, NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/Customer/Product';
import { CafeService } from 'src/app/core/service/cafe.service';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { OrdersComponent } from './orders/orders.component';

@Injectable()
export class CafeDataResolver implements Resolve<Product[]> {
  constructor(private cafeService: CafeService) {}

  resolve(): Observable<Product[]> {
    return this.cafeService.all();
  }
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ListComponent,
      resolve: {
        CafeDataResolver,     
    }
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'pedido',
    children: [
      {
        path: ':id',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CafeDataResolver],
})
export class CafeRoutingModule {}
