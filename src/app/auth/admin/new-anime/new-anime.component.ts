import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-new-anime',
  templateUrl: './new-anime.component.html',
  styleUrls: ['./new-anime.component.css'],
  providers:[AuthService]
})
export class NewAnimeComponent implements OnInit {

  public isLogged:boolean = false;
  public user:any;
  public userLogged: Observable<any> = this._services.afAuth.user;

  public loading:boolean = false;
  public loadingJKanime:boolean = false;
  public infoSucces:string ="";
  
  
  registerAnimeForm = new FormGroup({
    url: new FormControl(''),
});

registerAnimeFormJKanime = new FormGroup({
  urlJKanime: new FormControl(''),
});

registerAnimeFormAnimeFLV = new FormGroup({
  urlAnimeFLV: new FormControl(''),
});




  constructor(private _services:AuthService, private router:Router ) { }

  async ngOnInit() {

    this._services.afAuth;
    this.user = await this._services.getCurrentUser();

    if(this.user){
      this.isLogged = true;
    }

  }
  async logout(){

    await this._services.logout();
     //redirec al componenteLogin

      this.router.navigate(['/login']);
   
  }

  async newAnimeRegister(){

    const { url } = this.registerAnimeForm.value;
    this.loading = true;
  
    await this._services.newAnimeRegister(url)
        .subscribe((animeRegiter:any)=>{this.loading = false; console.log("mi respuesta "+animeRegiter);
        });
  
  }
  async newAnimeRegisterJKanime(){

    const { urlAnimeFLV } = this.registerAnimeFormJKanime.value;
    this.loadingJKanime = true;
  
    await this._services.newAnimeRegisterJKanime(urlAnimeFLV)
        .subscribe((animeRegiter:any)=>{this.loadingJKanime = false; console.log("mi respuesta "+animeRegiter);
        });
  
  }
  async newAnimeRegisterAnimeFLV(){

    const { urlAnimeFLV } = this.registerAnimeFormAnimeFLV.value;
    this.loadingJKanime = true;
  
    await this._services.newAnimeRegisterFLV(urlAnimeFLV)
        .subscribe((animeRegiter:any)=>{this.loadingJKanime = false; 
          this.infoSucces = "Registro completdo";
        });
  
  }

}
