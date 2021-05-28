import { Component, Input, OnInit } from '@angular/core';
import { IAnime } from 'src/app/interfaces/ianime';
import { Observable } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';
 import {Router} from '@angular/router';
import { PipeSpaceURLPipe } from 'src/app/pipes/pipe-space-url.pipe';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  //animeListGender:IAnime[]=[];
  animeList:IAnime[]=[];

  @Input("oneAnimeArray") oneAnimeArray:IAnime[] = [];

  constructor( private _animeServices:AnimeService, private router:Router) {  }

  ngOnInit(): void {
    
    this.getAnimeList();
  }

 
  //funcion que muestra la lista de animes en la vista principal
  getAnimeList(){
    
       this._animeServices.getAnimeList().subscribe((anime)=>{  this.animeList = anime; });
  }
  //funcion que recoge el array cuando se le da click a una carta para luego pasarlo al componente donde solo se mostrara un anime
 getArrayAnime(anime:IAnime){
    //this._animeServices.animeSeleccionado = anime;
    localStorage.setItem("animeSelected", JSON.stringify(anime));
    this.router.navigate([`/anime/${ anime.title.replace(" ","-")}`]);
    //router-link(["/anime/{{item.title | pipeSpaceURL}}"]);
    //saves_localStorage:IAnime | null = null;
    //this._animeServices.selectedAnime  = localStorage.setItem("animeSelected", JSON.stringify(anime));
   // this._animeServices.selectedAnime = 
    //localStorage.setItem("animeSelected", JSON.stringify(anime));
    

  }

}
