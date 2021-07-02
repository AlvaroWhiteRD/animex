import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
  });

  constructor( private _services:AuthService, private router:Router ) { }

  ngOnInit(): void {
  }

 async onLogin(){
    const { email, password } = this.loginForm.value;
    const user = await this._services.onLogin(email,password);

    //redirec al componente de agregar anime
    if(user){
      this.router.navigate(['/admin']);

    }
  } 

}
