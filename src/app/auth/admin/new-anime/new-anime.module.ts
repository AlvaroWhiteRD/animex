import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAnimeRoutingModule } from './new-anime-routing.module';
import { NewAnimeComponent } from './new-anime.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewAnimeComponent
  ],
  imports: [
    CommonModule,
    NewAnimeRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewAnimeModule { }
