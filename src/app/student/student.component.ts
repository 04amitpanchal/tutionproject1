import { Component, OnInit } from '@angular/core';
import { stu } from './studentclass';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
arr:stu[]=[
new stu(12,'amit','3rdyear','male','yes'),
new stu(13,'rinku','5thyear','female','yes'),
new stu(14,'nilam','phd','female','yes'),
new stu(15,'kush','10','male','yes')
];
sid:number;
sname:string;
sclass:string;
sgender:string;
sst:string;
  constructor() { }

  ngOnInit() {
  }
  ondelete(x)
  {
  this.arr.splice(this.arr.indexOf(x),1);
  }
  onupdate(x)
  {
      if(x.s_st=='yes')
      {
        x.s_st='no';
      }
      else
      {
        x.s_st='yes';
      }
}
onxy()
{
    this.arr.push(new stu(this.sid,this.sname,this.sclass,this.sgender,this.sst));
}
}
