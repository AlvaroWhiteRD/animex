import { Component, Input, OnInit, Output } from '@angular/core';
import { IAnime } from 'src/app/interfaces/ianime';
import { IEpisode } from 'src/app/interfaces/iepisode';
//import {  }
import { AnimeService } from 'src/app/services/anime.service';


@Component({
  selector: 'app-anime-description',
  templateUrl: './anime-description.component.html',
  styleUrls: ['./anime-description.component.css']
})
export class AnimeDescriptionComponent implements OnInit {

  animeSelected:IAnime | null = null;
  animeEpisodeList:IEpisode[]=[];
 
  idAnime:number | null = null;
  constructor( private _animeServices:AnimeService ) { }

  ngOnInit(): void {
     this. getUnoAnime();
  }
  
  
  //funcion que mostrara el anime seleccionado
  getUnoAnime(){
    //this.animeSelected = this._animeServices.selectedAnime;
    console.log(" anime seleccionaddo "+this.animeSelected);
   this.animeSelected = JSON.parse(localStorage.getItem("animeSelected")!);
   // this.animeSelected = this._animeServices.animeSeleccionado;


   this.idAnime = this.animeSelected?.id!;
    this.getAnimeListEpisode( this.idAnime );

  }
  //funcion que muestra todos los capitulos por anime
  getAnimeListEpisode(idAnime:number){
    this._animeServices.getAnimeListEpisode(18).subscribe((episodeList)=>{   this.animeEpisodeList = episodeList });
  }

  


}
