import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ViewOneVideoComponent } from './Components/view-one-video/view-one-video.component';
import { PlayerComponent } from './Components/player/player.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from "@angular/common/http"; 

//servicio
import { AnimeService } from './services/anime.service';
import { AnimeDescriptionComponent } from './Components/anime-description/anime-description.component';
import { PipeSpaceURLPipe } from './pipes/pipe-space-url.pipe';
//import { ViewVideoComponent } from './Components/view-video/view-video.component';
import { ViewOneVideoComponent } from './Components/view-one-video/view-one-video.component';

import { ReactiveFormsModule } from '@angular/forms';
//autenticacion
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { PageNotFoundComponent } from './Components/error/page-not-found/page-not-found.component';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NavBarComponent,
    HomeComponent,
    AnimeDescriptionComponent,
    PipeSpaceURLPipe,
    ViewOneVideoComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AnimeService,
    //LocationStrategy, 
    // HashLocationStrategy

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
