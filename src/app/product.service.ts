import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Product } from './product';
import { User } from './user';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL="http://localhost:2222/api/";
  private authenticate:string="authenticate";
  private token:any;
  constructor(private http:HttpClient,private router:Router) { }

  setToken(tok:any):void{
    this.token=tok;
    //localStorage.setItem('token',this.token);
    sessionStorage.setItem('token',tok);
  }
  getToken():any{
    //return localStorage.getItem('token');
    return localStorage.getItem('token');
  }
 getProducts():Observable<any>{
  let tokens='Bearer '+this.token;
   alert(tokens)
    if(this.token==null){
      alert('undeifne')
      this.router.navigate(['../login']);
      return new Observable<string>();
    }else{
      const headers=new HttpHeaders().set('Authorization',tokens);
      return this.http.get<any[]>(this.baseURL+"products",{headers,responseType:'text' as 'json'});
    }
     
 }

 storeProduct(product:Product):Observable<Object>{
  let tokens='Bearer '+this.token;
   const headers=new HttpHeaders().set('Authorization',tokens);
  return this.http.post(this.baseURL+"save",product,{headers,responseType:'text' as 'json'});
 }

 getProductById(id:number):Observable<Product>{
  let tokens='Bearer '+this.token;
  const headers=new HttpHeaders().set('Authorization',tokens);
   return this.http.get<Product>(`${this.baseURL}${id}`,{headers,responseType:'text' as 'json'});
 }

 updateProduct(id:number,product:Product):Observable<Product>{
  let tokens='Bearer '+this.token;
  const headers=new HttpHeaders().set('Authorization',tokens);
  return this.http.put<Product>(`${this.baseURL}${id}`,product,{headers,responseType:'text' as 'json'});
 }

 deleteProduct(id:number):Observable<any>{
  let tokens='Bearer '+this.token;
  const headers=new HttpHeaders().set('Authorization',tokens);
  return this.http.delete(`${this.baseURL}${id}`,{headers,responseType:'text' as 'json'});
 }

 isValidUser(user:User):Observable<any>{
  return this.http.post(`${this.baseURL}${this.authenticate}`,user,{responseType:'text' as 'json'});
 }

 message(token:any){
   let tokens='Bearer '+token;
   const headers=new HttpHeaders().set('Authorization',tokens);
   return this.http.get(this.baseURL+"msg",{headers,responseType:'text' as 'json'});
 }
}
