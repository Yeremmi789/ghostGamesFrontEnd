import { Component } from '@angular/core';
import { LibreriasComponent } from '../librerias/librerias.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    LibreriasComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
