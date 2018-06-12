import { Component, OnInit } from '@angular/core';
import { em } from './empclass';
import { EmpService } from "../emp.service";
import { t } from '../task/taskclass';
import { stu } from '../student/studentclass';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
arr:em[]=[

];
eid:number;
ename:string;
edes:string;
estatus:string;
  constructor(private _xyz:EmpService) { }

  ngOnInit() {

    this._xyz.getalldata().subscribe(
      (data:em[])=>{
        this.arr=data;
      }
    );
  }
  onadd(item:t)
  {
     this._xyz.addemp(new em(this.eid,this.ename,this.edes,this.estatus)).subscribe(
      (data:any)=>
      {
          console.log(data);
          this.arr.push(new em(this.eid,this.ename,this.edes,this.estatus));
      }
    );
  }
  ondelete(item:em)
  {
   this._xyz.deleteemp(item).subscribe(
     (data:any)=>
     {
      this.arr.splice(this.arr.indexOf(item),1);
     }
   );

  }
  onupdate(item:em)
  {
    if(item.e_status=='yes')
    {
      item.e_status='no';
    }
    else
    {
      item.e_status='yes';
    }
  }
}
