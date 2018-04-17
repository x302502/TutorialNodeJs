import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/Product';
const HOST_IMAGE = 'http://localhost:3001/img/';
@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  providers: [ProductService]
})
export class Example1Component implements OnInit {
  listProduct: [Product];
  isShowFrom = false;
  product: Product;
  constructor( private productService: ProductService) {
    this.product = new Product();
  }

  ngOnInit() {
    this.productService.loadProducts()
    .then( data => {
      this.listProduct = data.listProduct;
      this.listProduct.forEach(product => {
          product.picture = HOST_IMAGE + product.picture;
      });
    })
    .catch(err => console.log(err));
  }
  submitAddProduct(formAddProduct) {
    console.log(formAddProduct.value);
    this.isShowFrom = false;
  }
}
