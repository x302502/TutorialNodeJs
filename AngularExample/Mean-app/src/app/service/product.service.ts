import 'rxjs/add/operator/retry';

// Observable
import { Observable} from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from '../models/Product';

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
  getList() {
    return this.http.get(HOST).retry(); // load realtime
  }
}
