import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { t } from "../app/task/taskclass";
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url:string='http://localhost:3000/task/';
  private c:string='Content-Type';
  private a:string='application/json';
  constructor(private _http:HttpClient) { }
  getalldata(){
    return this._http.get(this.url);
  }

  deleteTask(item:t){
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.Id,{headers:h});
  }

  addTask(item:t){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:h});
  }
}
