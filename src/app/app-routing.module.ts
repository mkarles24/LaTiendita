import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SE IMPORTAN LOS COMPOENENTES QUE SE UTILIZAN PARA LAS RUTAS
import { HomeComponent } from "./home/home.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./cart/cart.component";
import { Page404Component } from "./page404/page404.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'detailProduct/:id',
    component: DetailProductComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
