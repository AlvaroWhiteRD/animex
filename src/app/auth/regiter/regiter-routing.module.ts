import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiterComponent } from './regiter.component';

const routes: Routes = [{ path: '', component: RegiterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegiterRoutingModule { }
