import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import {Router} from '@angular/router';
import { ProductService } from './../product.service';
@Component({
  selector: 'app-loginproduct',
  templateUrl: './loginproduct.component.html',
  styleUrls: ['./loginproduct.component.css']
})
export class LoginproductComponent implements OnInit {
 user:User=new User;
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
   
  }
  onLogin():void{
     this.service.isValidUser(this.user).subscribe(data=>{
      if(data!=null){
        console.log(data)
        this.service.setToken(data);
        this.service.message(data).subscribe(data=>{
          alert(data);
        })
        this.router.navigate(['../dashboard/user']);
      }
      
    },error=>{
      console.log(error)
      alert('invalid')
      this.router.navigate(['../home'])
    }
    )
   

  }

}
