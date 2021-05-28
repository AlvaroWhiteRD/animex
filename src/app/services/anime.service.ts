import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnime } from '../interfaces/ianime';
import { HttpClient } from "@angular/common/http"; 
import { IEpisode } from '../interfaces/iepisode';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  //animeSeleccionado:IAnime | null= null;
  //selectedAnime:any | null = null;  //JSON.parse( localStorage.getItem("selectedAnime")!);; 
  //localStorage.getItem("selectedAnime");
  //JSON.parse( localStorage.getItem("selectedAnime"));


  constructor( private _http: HttpClient ) { }
// private _http:HttpClient
  private URL_API:string = "http://localhost:5000/api"; 

  //lista de animes -vista HOME-
  getAnimeList(): Observable<IAnime[]>{

    return this._http.get<IAnime[]>(`${this.URL_API}/home/anime`);

  }

  //traer lista de episodios -vista DESCRIPCION ANIME-
  getAnimeListEpisode(id:number): Observable<IEpisode[]>{

    return this._http.get<IEpisode[]>(`${this.URL_API}/home/anime/${id}`);

  }

  /*saves_localStorage(){

    //this.selectedAnime = 
    localStorage.setItem("",);
  }*/

}
