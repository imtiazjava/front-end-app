import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import {FormsModule} from '@angular/forms';
import { LoginproductComponent } from './loginproduct/loginproduct.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeproductComponent } from './homeproduct/homeproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    AddproductComponent,
    UpdateproductComponent,
    LoginproductComponent,
    UserdashboardComponent,
    HomeproductComponent,
    AboutusComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    RegisterComponent,
    ListproductsComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
