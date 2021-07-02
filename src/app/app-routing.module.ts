import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EditAnimeComponent } from './auth/edit-anime/edit-anime.component';
//import { NewAnimeComponent } from './auth/new-anime/new-anime.component';
//import { AppComponent } from './app.component';
import { AnimeDescriptionComponent } from './Components/anime-description/anime-description.component';
import { PageNotFoundComponent } from './Components/error/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';

import { ViewOneVideoComponent } from './Components/view-one-video/view-one-video.component';
//import { ViewOneVideoComponent } from './Components/view-one-video/view-one-video.component';
//import { ViewVideoComponent } from './Components/view-video/view-video.component';
//import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
 // { path: '', component: HomeComponent, pathMatch: 'full' },
 { path: '', component: HomeComponent, pathMatch: 'full' },//vista principal
 //{ path: 'video', component: ViewOneVideoComponent, pathMatch: 'full' },
 { path: 'anime', component: AnimeDescriptionComponent, pathMatch: 'full' },
 { path: 'anime/:id', component: AnimeDescriptionComponent, pathMatch: 'full' },//descripcion del anime
 { path: 'anime/:animename/:numepisode', component: ViewOneVideoComponent },
 { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
 { path: 'register', loadChildren: () => import('./auth/regiter/regiter.module').then(m => m.RegiterModule) },
 { path: 'admin', loadChildren: () => import('./auth/admin/admin/admin.module').then(m => m.AdminModule) },
 { path: 'newanime', loadChildren: () => import('./auth/admin/new-anime/new-anime.module').then(m => m.NewAnimeModule) },
 { path: 'editanime', loadChildren: () => import('./auth/admin/edit-anime/edit-anime.module').then(m => m.EditAnimeModule) },


 { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },//pagina no encontrada

];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

/*
const appRoutes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminMainComponent, },
      { path: 'settings', component: SettingsComponent }          
    ]
  }
];
*/