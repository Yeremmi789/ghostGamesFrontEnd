import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GalleryModule, ImageItem, GalleryComponent, Gallery, GalleryImageDef, VideoItem, YoutubeItem, IframeItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';



@Component({
  selector: 'app-juego-carousel',
  standalone: true,
  imports: [
    GalleryModule,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './juego-carousel.component.html',
  styleUrl: './juego-carousel.component.css'
})


export class JuegoCarouselComponent implements OnInit{

  @ViewChild(GalleryComponent) g_Component!: GalleryComponent;
  @ViewChild(GalleryImageDef) img_Def!: GalleryImageDef;

  elementos: ImageItem[] = [];

  galeria_id = 'lightbox';

    // Agregado DEspues de hacer el Preview Dinámico
  constructor(
    public gallery:Gallery,
    private lightbox: Lightbox,

    private rou:ActivatedRoute,
  ){}
  datos:any;
  productoSeleccionado:any; //Definir el tipo de dato de cada producto

  ngOnInit(): void {


    // Agregado DEspues de hacer el Preview Dinámico

    this.rou.params.subscribe( (parametro) => {
      const prod_ID = +parametro['id'];
      // this.productoSeleccionado = this.obtenerProductoPorId(prod_ID);


      if(prod_ID == 1){
        this.elementos = [
        new ImageItem({ src: 'assets/carousel-juegos/1lara.jpg', thumb: 'assets/carousel-juegos/1lara.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/2lara.jpg', thumb: 'assets/carousel-juegos/2lara.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/3lara.jpg', thumb: 'assets/carousel-juegos/3lara.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/4lara.jpg', thumb: 'assets/carousel-juegos/4lara.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/5lara.jpg', thumb: 'assets/carousel-juegos/5lara.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/6lara.jpg', thumb: 'assets/carousel-juegos/6lara.jpg' }),
      ];
    }
    if(prod_ID == 2){
        this.elementos = [
        new ImageItem({ src: 'assets/carousel-juegos/1dbd.jpg', thumb: 'assets/carousel-juegos/1dbd.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/2dbd.jpg', thumb: 'assets/carousel-juegos/2dbd.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/3dbd.jpg', thumb: 'assets/carousel-juegos/3dbd.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/4dbd.jpg', thumb: 'assets/carousel-juegos/4dbd.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/5dbd.jpg', thumb: 'assets/carousel-juegos/5dbd.jpg' }),
        new ImageItem({ src: 'assets/carousel-juegos/6dbd.jpg', thumb: 'assets/carousel-juegos/6dbd.jpg' }),
      ];
    }

    if(prod_ID == 3){
      this.elementos = [
      new ImageItem({ src: 'assets/carousel-juegos/1r.jpg', thumb: 'assets/carousel-juegos/1r.jpg' }),
      new ImageItem({ src: 'assets/carousel-juegos/1r.jpg', thumb: 'assets/carousel-juegos/1r.jpg' })
      ];
    }

    });


    // this.elementos = [
    //   new ImageItem({ src: 'assets/carousel-juegos/1lara.jpg', thumb: 'assets/carousel-juegos/1lara.jpg' }),
    //   new ImageItem({ src: 'assets/carousel-juegos/2lara.jpg', thumb: 'assets/carousel-juegos/2lara.jpg' }),
    //   new ImageItem({ src: 'assets/carousel-juegos/3lara.jpg', thumb: 'assets/carousel-juegos/3lara.jpg' }),
    //   new ImageItem({ src: 'assets/carousel-juegos/4lara.jpg', thumb: 'assets/carousel-juegos/4lara.jpg' }),
    //   new ImageItem({ src: 'assets/carousel-juegos/5lara.jpg', thumb: 'assets/carousel-juegos/5lara.jpg' }),
    //   new ImageItem({ src: 'assets/carousel-juegos/6lara.jpg', thumb: 'assets/carousel-juegos/6lara.jpg' }),
    // ];



    const galleryRef = this.gallery.ref();
    galleryRef.load(this.elementos);


  }


}
