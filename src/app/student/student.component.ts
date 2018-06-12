import { Component, OnInit } from '@angular/core';
import { stu } from './studentclass';
import { StudentService } from "../student.service";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
arr:stu[]=[
  /*
new stu(12,'amit','3rdyear','male','yes'),
new stu(13,'rinku','5thyear','female','yes'),
new stu(14,'nilam','phd','female','yes'),
new stu(15,'kush','10','male','yes')*/
];
sid:number;
sname:string;
sclass:string;
sgender:string;
sst:string;
  constructor(private _xyz:StudentService) { }

  ngOnInit() {
  this._xyz.getallstudents().subscribe(
    (data:stu[])=>
    {
       this.arr=data;
    }
  );
  }
  ondelete(x:stu)
  {
  this._xyz.deletestudent(x).subscribe(
    (data:any)=>
    {
      console.log(data);
      this.arr.splice(this.arr.indexOf(x),1);
    }
  );

  }
  onupdate(item:stu)
  {
      if(item.s_status=='yes')
      {
        item.s_status='no';
      }
      else
      {
        item.s_status='yes';
      }
}
onxy(item:stu)
{
    this._xyz.addstudent(new stu(this.sid,this.sname,this.sclass,this.sgender,this.sst)).subscribe(
      (data:any)=>
      {
          console.log(data);
          this.arr.push(new stu(this.sid,this.sname,this.sclass,this.sgender,this.sst));
      }
    );

}
}
