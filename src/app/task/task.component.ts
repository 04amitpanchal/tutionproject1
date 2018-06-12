import { Component, OnInit } from '@angular/core';
import { t } from './taskclass';
import { TaskService } from "../task.service";
import { INSPECT_MAX_BYTES } from 'buffer';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
arr:t[]=[
  /*new t(1,'reading','done'),
  new t(2,'watching movie','done'),
  new t(3,'yoga','pendding'),
  new t(4,'swimming','done'),
  new t(5,'dance','pendding')*/
];
t_id:number;
t_title:string;
t_status:string;
  constructor(private _xyz:TaskService) { }

  ngOnInit() {

    this._xyz.getalldata().subscribe(
    (data:t[])=>
    {
      console.log(data);
    this.arr=data;
    }
    );
  }
deletetask(x:t){
  this._xyz.deleteTask(x).subscribe(
    (data:any)=>{
      console.log(data);
      this.arr.splice(this.arr.indexOf(x),1);
    }
  );

}

onadd()
{
  this._xyz.addTask(new t(this.t_id,this.t_title,this.t_status)).subscribe(
    (data:any)=>
    {
      console.log(data);
      this.arr.push(new t(this.t_id,this.t_title,this.t_status));
    }
  );

}

onupdate(item:t)
{
  if (item.Status=="yes") {
    item.Status="no";
  }
  else
  {
    item.Status="yes";
  }
}
}
