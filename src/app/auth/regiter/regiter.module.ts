import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegiterRoutingModule } from './regiter-routing.module';
import { RegiterComponent } from './regiter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegiterComponent
  ],
  imports: [
    CommonModule,
    RegiterRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegiterModule { }
