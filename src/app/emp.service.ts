import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { em } from "../app/emp/empclass";
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private url:string="http://localhost:3000/emp/";
  constructor(private _http:HttpClient) { }

getalldata(){
  return this._http.get(this.url);
}

deleteemp (item:em)
{
  let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url+item.e_id,{headers:h});
}

addemp(item:em)
{
  let h=new HttpHeaders().set('Content-Type','application/json');
  let body=JSON.stringify(item);
  return this._http.post(this.url,body,{headers:h});
}
}
