import { Component, OnInit } from '@angular/core';
import { pro } from "./productclass";
@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styleUrls: ['./arr.component.css']
})
export class ArrComponent implements OnInit {
arr:pro[]=[
  new pro(1,'phone',23000,'../../assets/img/ap1.jpg','yes'),
  new pro(2,'cloths',3400,'../../assets/img/ap1.jpg','no')

];
pid:number;
pname:string;
pprice:number;
pimg:string;
ps:string;
  constructor() { }

  ngOnInit() {
  }
  onadd()
  {
    this.arr.push(new pro(this.pid,this.pname,this.pprice,this.pimg,this.ps));
  }
ondelete(x)
{
this.arr.splice(this.arr.indexOf(x),1);
}
onupdate(x)
{
    if(x.p_s=='yes')
    {
      x.p_s='no';
    }
    else
    {
      x.p_s='yes';
    }

}
}
