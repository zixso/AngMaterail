import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatButtonToggleModule,
  MatInputModule, MatSelectModule, MatRadioModule, MatMenuModule
} from "@angular/material";

@NgModule({
  imports: [
    BrowserAnimationsModule,MatButtonModule,MatCardModule,MatToolbarModule,MatButtonModule,MatIconModule,
    MatButtonToggleModule,MatInputModule,MatSelectModule,MatRadioModule,MatMenuModule
  ],
  exports:[
    BrowserAnimationsModule,MatButtonModule,MatCardModule,MatToolbarModule,MatButtonModule,MatIconModule,
    MatButtonToggleModule,MatInputModule,MatSelectModule,MatRadioModule,MatMenuModule
  ]
})
export  class  MaterailModule{}
