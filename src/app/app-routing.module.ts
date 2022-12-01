import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginproductComponent } from './loginproduct/loginproduct.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeproductComponent } from './homeproduct/homeproduct.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: 'login', component: LoginproductComponent },
  { path: 'home', component: HomeproductComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        component: UserdashboardComponent,
        children: [
          { path: 'list', component: ProductlistComponent },
          { path: 'add', component: AddproductComponent },
          { path: 'update/:id', component: UpdateproductComponent },
          {path:'logout',component:LogoutComponent}
        ],
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule],
})
export class AppRoutingModule {}
