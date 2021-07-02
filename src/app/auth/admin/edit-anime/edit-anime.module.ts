import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAnimeRoutingModule } from './edit-anime-routing.module';
import { EditAnimeComponent } from './edit-anime.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditAnimeComponent
  ],
  imports: [
    CommonModule,
    EditAnimeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditAnimeModule { }
