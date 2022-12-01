import { Component, OnInit} from '@angular/core';
import { Product } from './../product';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public product:Product=new Product();
  constructor(private productservice:ProductService,private routes:Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log(this.product)
    this.productservice.storeProduct(this.product).subscribe(data=>{
       console.log(data);
      
      
    },error=>{
      console.log(error)
    })
    this.homePage();
  }

  homePage():void{
    alert('going back to home page')
    this.routes.navigate(['../dashboard/user/list'])
  }
  
}
