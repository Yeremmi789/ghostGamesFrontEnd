import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    NgStyle,
    NgFor,
    RouterLink,
    RouterOutlet,
    NgIf,
  ],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{

  ngOnInit(): void {
    
  }

  constructor(private router:Router){

  }

  // categoriaSeleccionada: any;

  // obtenerCategoria_id(categoria: any){
  //   this.categoriaSeleccionada = categoria;
  // }

  // verCategoria(juegos_categoria: number){ // para colcar el id en la url
  verCategoria(juegos_categoria: string){ //para colocar el nombre de la acción en la url
    this.router.navigate(['/explorando/categoria',juegos_categoria]);
  }

  categorias_info = [
    {
      id:1,
      categoria:"Acción",
      imagen: "assets/imagenes/accion0.jpg",
      leyenda:"¡Prepárate para la adrenalina! Sumérgete en un mundo de acción trepidante y combate sin fin",
    },
    {
      id:2,
      categoria:"Aventura",
      imagen: "assets/imagenes/aventura.jpg",
      leyenda:"Embárcate en una travesía épica llena de descubrimientos y peligros inimaginables",
    },
    {
      id:3,
      categoria:"Deporte",
      imagen: "assets/imagenes/deporte.jpg",
      leyenda:"Siente la emoción de la competencia y la pasión por el deporte en cada partida",
    },
    {
      id:4,
      categoria:"Terror",
      imagen: "assets/imagenes/terror.jpg",
      leyenda:"Atrévete a enfrentar tus miedos más profundos en una atmósfera escalofriante y llena de suspenso",
    },
    {
      id:5,
      categoria:"Rol",
      imagen: "assets/imagenes/rol1.jpg",
      leyenda:"Forja tu propio destino en un universo de fantasía donde cada decisión cuenta.",
    },
    {
      id:6,
      categoria:"Combate",
      imagen: "assets/imagenes/peleas0.jpg",
      leyenda:"¡No hay piedad! ¡Acaba con tus enemigos y reclama la victoria!",
    },
    {
      id:7,
      categoria:"Carreras",
      imagen: "assets/imagenes/carreras0.jpg",
      leyenda:"¡Prepárate para pisar el acelerador y desafiar a tus rivales en carreras vertiginosas!",
    },
    {
      id:8,
      categoria:"Simulación",
      imagen: "assets/imagenes/accion4.jpg",
      leyenda:"Prepárate para superar obstáculos y trampas desafiantes. ¡Tu agilidad será tu mejor aliada!",
    },
  ];

}
