import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { AnimeDescriptionComponent } from './Components/anime-description/anime-description.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewOneVideoComponent } from './Components/view-one-video/view-one-video.component';
//import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
 // { path: '', component: HomeComponent, pathMatch: 'full' },
 { path: '', component: HomeComponent, pathMatch: 'full' },//vista principal
 { path: 'video', component: ViewOneVideoComponent, pathMatch: 'full' },
 { path: 'anime', component: AnimeDescriptionComponent, pathMatch: 'full' },
 { path: 'anime/:id', component: AnimeDescriptionComponent, pathMatch: 'full' },//descripcion del anime
 //{ path: 'anime/:id/:id', component: AnimeDescriptionComponent, pathMatch: 'full' },//capitulo del anime

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})

export class AppRoutingModule { }