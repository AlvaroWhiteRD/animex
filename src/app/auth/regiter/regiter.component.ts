import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css'],
  providers:[AuthService]
})
export class RegiterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});

  constructor( private _services:AuthService ) { }

  ngOnInit(): void {
  }

  onRegister(){
    const { email, password } = this.registerForm.value;
    this._services.onRegister(email,password);
  } 


}
