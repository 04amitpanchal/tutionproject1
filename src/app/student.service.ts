import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { stu } from "../app/student/studentclass";
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url:string='http://localhost:3000/student/';
  constructor(private _http:HttpClient) { }

    getallstudents(){
      return this._http.get(this.url);
    }

    deletestudent(item:stu){
      let h=new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.url+item.s_id,{headers:h});
    }

    addstudent(item:stu){
      let body=JSON.stringify(item);
      let h= new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.url,body,{headers:h});
    }

}
