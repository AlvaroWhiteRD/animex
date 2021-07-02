import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[AuthService]
})
export class AdminComponent implements OnInit {

  
  public isLogged:boolean = false;
  public user:any;
  public userLogged: Observable<any> = this._services.afAuth.user;
  

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

}
