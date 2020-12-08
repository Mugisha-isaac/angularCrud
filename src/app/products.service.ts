import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
uri = 'http://localhost:8080/products';
  constructor(private http:HttpClient) {}
    addProduct(productName,productPrice,productDescription){
      const obj ={
        productName,
        productDescription,
        productPrice
      };
      console.log(obj);
      this.http.post(`${this.uri}/add`,obj)
      .subscribe(res=>console.log('Done'));
    }
   }
