import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { pro } from "../app/arr/productclass";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public c:string="Content-Type";
  public a:string="application/json";
  private url:string='http://localhost:3000/product/';
  constructor(private _http:HttpClient) { }

  getalldata(){
    return this._http.get(this.url);
  }

  deleteproduct(item:pro){
    let h=new HttpHeaders().set(this.c,this.a);
    return this._http.delete(this.url+item.p_id,{headers:h});
  }

  addproduct(item:pro){
    let h=new HttpHeaders().set(this.c,this.a);
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:h});
  }
}
