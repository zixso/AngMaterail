import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {MaterailModule} from "./shared/sharedMtModule";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormMdComponent } from './form-md/form-md.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    FormMdComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,HttpModule,MaterailModule ,FormsModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
