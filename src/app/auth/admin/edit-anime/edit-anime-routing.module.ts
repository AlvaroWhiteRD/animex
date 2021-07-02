import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAnimeComponent } from './edit-anime.component';

const routes: Routes = [{ path: '', component: EditAnimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAnimeRoutingModule { }
