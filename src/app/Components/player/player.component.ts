import { Component, OnInit } from '@angular/core';
import { IEpisode } from 'src/app/interfaces/iepisode';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  animeEpisode:IEpisode | null = null;
  animeEpisodeList:IEpisode[] | null = null;

  constructor( private _animeServices:AnimeService ) { }

  ngOnInit(): void {
    this.getEpisodeAnime();
  }

    //funcion que mostrara el anime seleccionado
    getEpisodeAnime(){
      //this.animeSelected = this._animeServices.selectedAnime;
     // console.log(" anime seleccionaddo "+this.animeSelected);
  /*    this.animeEpisode = JSON.parse(localStorage.getItem("episodeAnime")!);
      this.animeEpisode?.idAnime;
      
        this._animeServices.getAnimeListEpisodePlayer(this.animeEpisode?.idAnime!)
          .subscribe((episodeList:IEpisode[])=>{ localStorage.setItem("episodeAnimeList", JSON.stringify(episodeList)) });

          this.animeEpisodeList = JSON.parse(localStorage.getItem("episodeAnimeList")!); */
          
    }
 
}
