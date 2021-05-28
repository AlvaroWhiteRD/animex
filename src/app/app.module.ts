import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewOneVideoComponent } from './Components/view-one-video/view-one-video.component';
import { PlayerComponent } from './Components/player/player.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from "@angular/common/http"; 

//servicio
import { AnimeService } from './services/anime.service';
import { AnimeDescriptionComponent } from './Components/anime-description/anime-description.component';
import { PipeSpaceURLPipe } from './pipes/pipe-space-url.pipe';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ViewOneVideoComponent,
    PlayerComponent,
    NavBarComponent,
    HomeComponent,
    AnimeDescriptionComponent,
    PipeSpaceURLPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AnimeService,
    //LocationStrategy, 
    // HashLocationStrategy

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
