import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ArrComponent } from './arr/arr.component';
import { StudentComponent } from './student/student.component';
import { WebComponent } from './web/web.component';
import { Practice1Component } from './practice1/practice1.component';
@NgModule({
  declarations: [
    AppComponent,
    ArrComponent,
    StudentComponent,
    WebComponent,
    Practice1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
