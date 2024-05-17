import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SharedModule } from '../shared/shared.module';
import { CommandesComponent } from './commandes/commandes.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EditprofileComponent,
    CommandesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    // VendeurModule
    EditprofileComponent
  ]
})
export class VendeurModule { }