import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginproductComponent } from '../loginproduct/loginproduct.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { ProductService } from './../product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 
  constructor(private productService:ProductService,private router:Router) { 
     
  }

  ngOnInit(): void {
    sessionStorage.clear();
     if(sessionStorage.getItem('token')==null)
    {
            this.router.navigate(['../login']);
    }


  }

}
