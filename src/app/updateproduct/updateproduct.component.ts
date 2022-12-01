import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css'],
})
export class UpdateproductComponent implements OnInit {
  id: number;
  public product:Product=new Product();
  constructor(
    private productservice: ProductService,
    private routes: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.productservice.getProductById(this.id).subscribe(data => {
        this.product = data;
        console.log(data);
        alert(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit(): void {
    alert(this.product)
    alert(typeof this.product)
    alert(this.id)
    this.productservice.updateProduct(this.id, this.product).subscribe(
      (data) => {
        console.log(data);
        this.homePage();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  homePage(): void {
    alert('going back to home page');
    this.router.navigate(['../login']);
  }
}
