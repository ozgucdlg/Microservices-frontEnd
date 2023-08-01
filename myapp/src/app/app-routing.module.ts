import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  {path:"", component:LayoutsComponent,
  children:[
    {
        path:"",
        component:HomeComponent
    },
    {
      path:"basket",
      component:BasketComponent
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
