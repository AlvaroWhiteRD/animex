import { Component, OnInit } from '@angular/core';
import { IAnime } from 'src/app/interfaces/ianime';
import { IEpisode } from 'src/app/interfaces/iepisode';
import { AnimeService } from 'src/app/services/anime.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-one-video',
  templateUrl: './view-one-video.component.html',
  styleUrls: ['./view-one-video.component.css']
})
export class ViewOneVideoComponent implements OnInit {

  animeEpisode:IEpisode | null = null;
  animeEpisodeList:IEpisode| null = null;

 // reproductores.
 hqq:string= "";
 ok:string= "";
 mega:string= "";
 dood:string= "";
 sbembed:string= "";
 yourupload:string= "";
 streamtape:string = "";
 pelispng:string = "";
 server01:string= "";
 animeid:string = "";
 
  animeDetail:IAnime | null = null;
  player:string = "";
  episodeAnimeForNumberEpisode:IEpisode[] | null = null;

  paginatorNext:number = 0;
  constructor( private _animeServices:AnimeService, public sanitizer:DomSanitizer ) {  }

  ngOnInit(): void {
    this.getEpisodeAnime()
    this.paginatorNext = this.animeEpisode?.episodeNumber! + 1;
    this.getEpisodeForNumber(this.animeEpisode?.idAnime!, this.animeEpisode?.episodeNumber!);

   }
     //funcion que mostrara el anime seleccionado
     getEpisodeAnime(){

      this.animeEpisode = JSON.parse(localStorage.getItem("episodeAnime")!);
      this.animeEpisode?.idAnime;
      
        this._animeServices.getAnimeListEpisodePlayer(this.animeEpisode?.idAnime!)
          .subscribe((episodeList:IEpisode[])=>{ localStorage.setItem("episodeAnimeList", JSON.stringify(episodeList)) });

          //lista el tomal de episodios por anime
          this.animeEpisodeList = JSON.parse(localStorage.getItem("episodeAnimeList")!); 
          //lista un solo anime 
          this.animeDetail = JSON.parse(localStorage.getItem("animeSelected")!); 
    }
    //funcion que se encarga de saber en cual tap de los reproductores estoy
    playerSelected(player:string){
      this.player = player;
    }

    //funcion que buscara el anime con su lista de episodios 
    getEpisodeForNumber (idAnime:number, numberEpisode:number ){

      this._animeServices.getEpisodeForNumber(idAnime,numberEpisode)

          .subscribe((episodeAnimeForNumberEpisode:IEpisode[])=>{ 
           
               // this.episodeAnimeForNumberEpisode = episodeAnimeForNumberEpisode;
               /* episodeAnimeForNumberEpisode.forEach(element  => {
                  console.log("element "+element.episodeVideo)
                  this.desu = element.episodeVideo;
                  this.xtreme = element.episodeVideo;
                  this.hqq = element.episodeVideo;
                  
                 
                }); console.log("desu "+this.desu,this.xtreme,this.hqq)*/
                /*episodeAnimeForNumberEpisode.forEach(function callback(currentValue, index, array) {
                  this.desu = currentValue.episodeVideo;
              });*/
              for (let index = 0; index < episodeAnimeForNumberEpisode.length; index++) {
                //link de los respectivos reproductores
                this.hqq = episodeAnimeForNumberEpisode[0].episodeVideo;
                this.ok = episodeAnimeForNumberEpisode[1].episodeVideo;
                this.mega = episodeAnimeForNumberEpisode[2].episodeVideo;
                this.dood = episodeAnimeForNumberEpisode[3].episodeVideo;
                this.sbembed = episodeAnimeForNumberEpisode[4].episodeVideo;
                this.yourupload = episodeAnimeForNumberEpisode[5].episodeVideo;
                this.streamtape = episodeAnimeForNumberEpisode[6].episodeVideo;
                this.pelispng = episodeAnimeForNumberEpisode[7].episodeVideo;
                this.server01 = episodeAnimeForNumberEpisode[8].episodeVideo;                
                this.animeid = episodeAnimeForNumberEpisode[9].episodeVideo;
              }
              
             });
    }
    getEpisodeAnimePaginator(anime:IEpisode){
      localStorage.setItem("episodeAnime", JSON.stringify(anime));
    }

    paginator(){
      
          //this.paginatorNext = JSON.parse(localStorage.getItem("episodeAnimeList")); 
          
    }


}
