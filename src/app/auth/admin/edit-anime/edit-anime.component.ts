import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAnime } from 'src/app/interfaces/ianime';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-anime',
  templateUrl: './edit-anime.component.html',
  styleUrls: ['./edit-anime.component.css'],
  providers:[AuthService]
})
export class EditAnimeComponent implements OnInit {


  public isLogged:boolean = false;
  public user:any;
  public userLogged: Observable<any> = this._services.afAuth.user;

  animeTitle:IAnime[] | null= null;
  animeValid:boolean = false;
  animeSourceValid:boolean = false;
  animeSourceSelected:string = "";
    
  updateAnimeForm = new FormGroup({//Validators.pattern("^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$"),
    urlAnime: new FormControl("",  Validators.compose([
      Validators.required,
      Validators.minLength(15),
      //Validators.pattern("https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)")
    ])),
    episodeNumber: new FormControl(['', Validators.required]),
    animeSelected: new FormControl(['', Validators.required]),
    selectAnimeSource: new FormControl(['', Validators.required]),
    
});


  constructor(private _services:AuthService, private router:Router ) { }

  async ngOnInit() {

    this._services.afAuth;
    this.user = await this._services.getCurrentUser();

    if(this.user){
      this.isLogged = true;
    }
    this.getAnimeTitleID();
  }
  async logout(){

    await this._services.logout();
     //redirec al login
      this.router.navigate(['/login']);
   

  }
//traemos el id y el titulo del back para mostrarlo en el select option
  async getAnimeTitleID(){
    return this._services.getAnimeTitleID().subscribe((animeTitle:IAnime[])=>{
      this.animeTitle = animeTitle;
    });
  }

  async uodateAnime(){

    const { url } = this.updateAnimeForm.value;
    //this.loading = true;
  
    await this._services.newAnimeRegister(url)
        .subscribe((animeRegiter:any)=>{});

  }
  //validamos que el anime este seleccionado en el select option
  onChanges(){
    
     if (this.updateAnimeForm.get("animeSelected")?.valid) {
       this.animeValid = true;
    
     }
     
  }
  //validamos que la fuente de donde se buscara el animme este seleccionada.
  onChangeAnimeSelect(){
    const { selectAnimeSource } = this.updateAnimeForm.value;
    this.animeSourceSelected = selectAnimeSource;
  }

 async registerOneEpisode(){

    if (this.updateAnimeForm.invalid) {
        this.updateAnimeForm.markAllAsTouched();
        return;
    }

   const { urlAnime, animeSelected, selectAnimeSource, episodeNumber } = this.updateAnimeForm.value;
   
    await this._services.registerOneEpisode( urlAnime, animeSelected, selectAnimeSource, episodeNumber )
        .subscribe((registerSucces:any)=>{

        });  
  }
}
