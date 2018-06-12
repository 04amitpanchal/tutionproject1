import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ArrComponent } from './arr/arr.component';
import { StudentComponent } from './student/student.component';
import { WebComponent } from './web/web.component';
import { Practice1Component } from './practice1/practice1.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from "@angular/common/http";
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrComponent,
    StudentComponent,
    WebComponent,
    Practice1Component,
    TaskComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
