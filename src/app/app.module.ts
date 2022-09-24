import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// REACTIVE FORMS MODULE
import { ReactiveFormsModule } from '@angular/forms';

// MODULOS DE LIBRERIAS DE ESTILO (ANGULAR MATERIAL Y NG BOOTSTRAP)
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatRippleModule } from "@angular/material/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// COMPONENTES
import { HeaderComponent } from './header/header.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CartComponent } from './cart/cart.component';
import { Page404Component } from './page404/page404.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { DetailTemplateComponent } from './detail-template/detail-template.component';
import { CartTemplateComponent } from './cart-template/cart-template.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogoComponent,
    DetailProductComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CarruselComponent,
    BarraBusquedaComponent,
    CartComponent,
    Page404Component,
    LoginTemplateComponent,
    RegisterTemplateComponent,
    MenuSideComponent,
    DetailTemplateComponent,
    CartTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
