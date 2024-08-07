import { Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { ProductoCarouselComponent } from '../../reutilizables/producto-carousel/producto-carousel.component';
import { LibreriasComponent } from '../librerias/librerias.component';
import { JuegoCarouselComponent } from '../../reutilizables/juego-carousel/juego-carousel.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-vista-previa',
  standalone: true,
  imports: [
    ProductoCarouselComponent,
    LibreriasComponent,
    JuegoCarouselComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './vista-previa.component.html',
  styleUrl: './vista-previa.component.css'
})
export class VistaPreviaComponent implements OnInit{

  constructor(
    private router:Router,
    private rou:ActivatedRoute, //Obtener la info del producto atraves del ID
    private el:ElementRef,
    private renderer2:Renderer2,
  ){

  }

  datos:any;
  productoSeleccionado:any; //Definir el tipo de dato de cada producto
  colorFondos:any;

  clase_cFull = "c-full";


  ngOnInit(): void {
    this.rou.params.subscribe( (parametro) => {
      const prod_ID = +parametro['id'];
      this.productoSeleccionado = this.obtenerProductoPorId(prod_ID);

      if(this.productoSeleccionado){
        // this.el.nativeElement.backgroundColor = this.productoSeleccionado.colorFondo;
        this.colorFondos = this.productoSeleccionado.colorFondo;
      }

    });

  }

// Prueba de añadir elementos al html desde TypeScript

@ViewChild('elementoContenedorDinamico') elementoContenedorDinamico:any;

agregarElemento(textoElemento: string) {
  const nuevoElemento = this.renderer2.createElement('p');
  const textoNodo = this.renderer2.createText(textoElemento);
  this.renderer2.appendChild(nuevoElemento, textoNodo);
  this.renderer2.appendChild(this.elementoContenedorDinamico.nativeElement, nuevoElemento);
}
  // Prueba de añadir elementos al html desde TypeScript



  obtenerProductoPorId(id: number): any {
    const producto = this.products.find((item) => item.id === id);
    if (producto) return producto;

    const productoKid = this.products.find((kid) => kid.id === id);
    if (productoKid) return productoKid;

    const productoMan = this.products.find((man) => man.id === id);
    return productoMan;
  }


  products = [
    {
      id: 1,
      name: 'EA SPORTS FC™ 24 Standard Edition',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/4750c68b2bfa4f43933b81cfd5cc510c/EGS_EASPORTSFC24StandardEdition_EACanada_S2_1200x1600-5ecbb77fd9c0601ef34c4a988120fc42?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80',
      // logoJuego: 'assets/carousel-juegos/6lara.jpg'
      // logoJuego: 'assets/logos/laraLogo.jpg'
      logoJuego: 'https://cdn2.unrealengine.com/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-ic1-400x400-1a101c6adcf1-400x132-564f4e1cc624.png?h=270&quality=medium&resize=1&w=480',
      colorFondo: '#082d31'
    },
    {
      id: 2,
      name: 'Red Dead Redemtion 2',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80',
      logoJuego: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_IC1-625x625-38ae1bca6b89370d01ac3ed3a17daf7dd004f9f5.png?h=270&quality=medium&resize=1&w=480',
      colorFondo: '#000000'
    },
    {
      id: 3,
      name: 'Grand Theft Auto V: Premium Edition',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80',
      logoJuego: 'assets/redLogo.avif',
      colorFondo: 'blue'
    },
    {
      id: 4,
      name: 'Hogwars Legacy',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80',
      logoJuego: 'assets/redLogo.avif',
      colorFondo: 'green'
    },
    {
      id: 5,
      name: "Assasin's Creed  Mirage",
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/9bcf5a4dc1d54cb6ab1a42f3a70c5cf4/Carousel_BoxArt_1200x1600_1200x1600-38bda67bb1290f58e8a18ddc38a3c0ec?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80',
      logoJuego: 'assets/redLogo.avif',
      colorFondo: 'red'
    },


//

    {
      id: 6,
      name: 'EA SPORTS FC™ 24 Standard Edition',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/4750c68b2bfa4f43933b81cfd5cc510c/EGS_EASPORTSFC24StandardEdition_EACanada_S2_1200x1600-5ecbb77fd9c0601ef34c4a988120fc42?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },
    {
      id: 7,
      name: 'Red Dead Redemtion 2',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },
    {
      id: 8,
      name: 'Grand Theft Auto V: Premium Edition',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },
    {
      id: 9,
      name: 'Hogwars Legacy',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },
    {
      id: 10,
      name: "Assasin's Creed  Mirage",
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/9bcf5a4dc1d54cb6ab1a42f3a70c5cf4/Carousel_BoxArt_1200x1600_1200x1600-38bda67bb1290f58e8a18ddc38a3c0ec?h=480&quality=medium&resize=1&w=360',
      category: 'JUEGO BASE',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },
  ];


}
