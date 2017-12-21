import { Component } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {User} from "./Models/Contact.Model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }
}
