import { Component, OnInit } from '@angular/core';
import { w } from './webclass';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  arr:w[]=[
    new w(1,'Dinning-1',23000,'../../assets/img/f12.jpg','yes'),
    new w(2,'Dinning-2',3400,'../../assets/img/f13.jpg','no'),
    new w(3,'Dinning-2',3400,'../../assets/img/f12.jpg','no'),
    new w(4,'Dinning-4',3400,'../../assets/img/f12.jpg','no'),
    new w(5,'Dinning-5',3400,'../../assets/img/f13.jpg','no'),
    new w(6,'Dinning-6',3400,'../../assets/img/f13.jpg','no'),

    /*new w(7,'cloths',3400,'../../assets/img/f10.jpg','no'),
    new w(8,'cloths',3400,'../../assets/img/f11.jpg','no'),
    new w(9,'cloths',3400,'../../assets/img/f12.jpg','no'),
    new w(10,'cloths',3400,'../../assets/img/f13.jpg','no'),
    new w(11,'cloths',3400,'../../assets/img/f12.jpg','no')
*/

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
    this.arr.push(new w(this.pid,this.pname,this.pprice,this.pimg,this.ps));
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
