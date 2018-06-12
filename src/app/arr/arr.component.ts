import { Component, OnInit } from '@angular/core';
import { pro } from "./productclass";
import { ProductService } from "../product.service";
@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styleUrls: ['./arr.component.css']
})
export class ArrComponent implements OnInit {
arr:pro[]=[
  //  new pro(1,'phone',23000,'../../assets/img/ap1.jpg','yes'),
  // new pro(2,'cloths',3400,'../../assets/img/ap1.jpg','no')

];
pid:number;
pname:string;
pprice:number;
pimg:string;
ps:string;
  constructor(private _xyz:ProductService) { }

  ngOnInit() {
  this._xyz.getalldata().subscribe(
  (data:pro[])=>{
    console.log(data);
    this.arr=data;

  }
);
  }
  onadd(item:pro)
  {
    this._xyz.addproduct(new pro(this.pid,this.pname,this.pprice,this.pimg,this.ps)).subscribe(
      (data:any)=>
      {
          console.log(data);
          this.arr.push(new pro(this.pid,this.pname,this.pprice,this.pimg,this.ps));
      }
    );

  }
ondelete(item:pro)
{
    this._xyz.deleteproduct(item).subscribe(
      (data:any)=>
      {
        console.log();
        this.arr.splice(this.arr.indexOf(item),1);
      }
    );

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
