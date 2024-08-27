import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  mostrarPassword:boolean = false;

  verPassword(){
    this.mostrarPassword = !this.mostrarPassword;
  }

}
