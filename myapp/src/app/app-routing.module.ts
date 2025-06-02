import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { BasketComponent } from './components/basket/basket.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'basket',
        component: BasketComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
