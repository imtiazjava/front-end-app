import { Component, OnInit} from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public products:Product[];
  public msg:any;
  constructor(private productService:ProductService,private router:Router){
    
  }
  ngOnInit(){
      this.productService.getProducts().subscribe(data=>{
         alert(data+"<----")
         if(data==="undefined" || data==null){
          this.router.navigate(['../home']);
        }
         this.products=JSON.parse(data);
      },error=>{
        this.msg=error;
      })    
  }
  private getAllProducts(){
    this.productService.getProducts().subscribe(data=>{
      alert(data+"<----")
      if(data==="undefined" || data==null){
        this.router.navigate(['../home']);
      }
      this.products=JSON.parse(data);
    },error=>{
      alert('error')
    })
  }
  updateProduct(id:any):void{
     this.router.navigate(['dashboard/user/update',id]);
  }

  deleteProduct(id:any):void{
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.getAllProducts();
    },error=>{
      console.log(error);
    })
  }
}
