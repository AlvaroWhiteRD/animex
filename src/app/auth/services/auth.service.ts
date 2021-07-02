
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewAnime } from 'src/app/interfaces/inew-anime';
import { ParametroUrl } from 'src/app/interfaces/Parametro';
import { IAnime } from 'src/app/interfaces/ianime';


@Injectable()
export class AuthService {

  public user:User | null = null;
  private URL_API:string = "http://localhost:5000/api"; 
   //par!: ParametroUrl;

    urlSearch:string = "";

  constructor( public afAuth:AngularFireAuth,private _http: HttpClient ) { }

  async onLogin( email:string, password:string ){

    const result = await this.afAuth.signInWithEmailAndPassword(
      email, 
      password
      );
      return result;

  }
  async onRegister( email:string, password:string ){
    
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email, 
      password
      );
      return result;
  }
  async logout(){
    await this.afAuth.signOut();
  }
  //usuario logueado
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  newAnimeRegister(nameURL:string){

    return this._http.post(`${this.URL_API}/home/name`, {url : nameURL}) ;

  }
  newAnimeRegisterJKanime(nameURL:string){

    return this._http.post(`${this.URL_API}/PagesForScraping/jk`, {url : nameURL}) ;

  }
  newAnimeRegisterFLV(nameURL:string){

    return this._http.post(`${this.URL_API}/PagesForScraping/flv`, {url : nameURL}) ;

  }

  getAnimeTitleID(): Observable<IAnime[]>{

    return this._http.get<IAnime[]>(`${this.URL_API}/home/anime-title`);

  }

  registerOneEpisode( urlAnime:string, animeSelected:number, selectAnimeSource:string, episodeNumber:number ){

     return this._http.post(`${this.URL_API}/PagesForScraping/${selectAnimeSource}`, { url:urlAnime, IdAnime:animeSelected, NumberEpisode:episodeNumber });

  }

}
