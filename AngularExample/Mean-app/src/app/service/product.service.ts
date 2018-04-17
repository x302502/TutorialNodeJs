import { Injectable, Host } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
const HOST = 'http://localhost:3001/api/product/';
@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }
  loadProducts() {
    return this.http.get(HOST).toPromise()
    .then(res => res.json())
    .catch(err => err);
  }
}
