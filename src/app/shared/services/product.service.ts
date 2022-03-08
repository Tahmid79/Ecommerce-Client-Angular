import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {pluck} from "rxjs/operators";
import {IProduct} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productServiceBaseUrl: string ;

  public routes = {
    products : '/products'
  } ;


  constructor(private http: HttpClient) {
    this.productServiceBaseUrl = environment.productServiceBaseUrl ;
    console.log(this.productServiceBaseUrl) ;
  }
  getProducts(): Observable<IProduct[]> {
      const productListUrl: string = this.productServiceBaseUrl + this.routes.products ;
      return this.http.get(productListUrl).pipe(
        pluck('data')
      ) ;
  }
}
