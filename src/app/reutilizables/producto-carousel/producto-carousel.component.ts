import { Component, HostListener, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';  // Importar CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LocalstorageBasicService } from '../../servicios/localstorage-basic.service';


@Component({
  selector: 'app-producto-carousel',
  standalone: true,
  imports: [
    NgStyle,
    NgFor,
    NgClass,
    RouterOutlet,
    RouterLink,
    NgIf,
    // BrowserModule,
  ],
  templateUrl: './producto-carousel.component.html',
  styleUrl: './producto-carousel.component.css'
})
export class ProductoCarouselComponent implements OnInit{

  esMobile: boolean = false;
  ultimaPagina:number = 0;
  ultimaPagina2:number = 0;
  cantidadDecimal:number = 0;
  cantidadDecimal2:number = 0;
  


  // Listener para detectar cambios en el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkDeviceType();
  } 

  // Método para verificar el tipo de dispositivo
  checkDeviceType() {
    this.esMobile = window.innerWidth <= 768;
    if (this.esMobile) {
      this.applyMobileLogic();
    } else {
      this.applyDesktopLogic();
    }
  }

   // Lógica específica para dispositivos móviles
   applyMobileLogic() {
    console.log('Aplicando lógica para dispositivos móviles');
    this.ultimaPagina = Math.floor(this.products.length / 3);
    this.ultimaPagina2 = Math.floor(this.products_v2.length / 3);
    // Aquí va tu lógica específica para móviles
    this.cantidadDecimal = this.products.length / 3;
    this.cantidadDecimal2 = this.products_v2.length / 3;
  }
  
  // Lógica específica para dispositivos de escritorio
  applyDesktopLogic() {
    console.log('Aplicando lógica para dispositivos de escritorio');
    // Aquí va tu lógica específica para escritorio
    
    this.ultimaPagina = Math.floor(this.products.length / 6);
    this.ultimaPagina2 = Math.floor(this.products_v2.length / 6);
    this.cantidadDecimal = this.products.length / 6;
    this.cantidadDecimal2 = this.products_v2.length / 6;
  }




  constructor(
    private router:Router,
    private localStorage:LocalstorageBasicService
  ){
  }

  ngOnInit() {
    this.checkDeviceType(); // Verifica el tipo de dispositivo al cargar la página
  }

  hoveredProduct: any; // Propiedad para almacenar el producto sobre el cual está el mouse
  selectedProduct: any; // Propiedad para almacenar el producto seleccionado

  onProductClick(product: any) {
    this.selectedProduct = product;
  }


  onMouseEnter(product: any) {
    this.hoveredProduct = product;
  }

  onMouseLeave() {
    this.hoveredProduct = null;
  }

  destacadosTitulo = "Destacados de las SUPEROFERTAS";
  completa1 = false;
  completa2 = false;
  destacadosTitulo2 = "Destacados de las ofertas de Epic";



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
      discountedPrice: '219.80'
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
      discountedPrice: '219.80'
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
      discountedPrice: '219.80'
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
      discountedPrice: '219.80'
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
      discountedPrice: '219.80'
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


  
  paginaIndex = 0;
  // ultimaPagina = Math.floor(this.products.length / 3);
  private recidirRedondear(cantidad: number) {
    let numeroExtraido: number;
    numeroExtraido = cantidad - Math.trunc(cantidad);
    if (numeroExtraido > 0.1) {
      this.ultimaPagina = cantidad - 1;
  } else {
        this.ultimaPagina = cantidad - 1;
  }

    return this.ultimaPagina;
}

  



  prev() {
    if(this.paginaIndex > 0){
      this.paginaIndex--;
    }
  }

  next() {
    // if(this.paginaIndex < this.products.length / 6){
    //   this.paginaIndex++;
    // }

    // const cantidadDecimal = this.products.length / 6;
    this.recidirRedondear(this.cantidadDecimal);

    // Tu lógica actual de next_v2 aquí
    if (this.paginaIndex < this.ultimaPagina) {
        this.paginaIndex++;
    }
  }

  

  products_v2 = [
    {
      id:11,
      name: 'The Callisto Protocol',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/6b0541b5d9aa476cbf407643ab3b1d7d/EGS_TheCallistoProtocol_StrikingDistanceStudios_S2_1200x1600-1e31eacc92833279f5b7a8d07cd3826c?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-70 %',
      originalPrice: '300',
      discountedPrice: '1200'
    },
    {
      id:12,
      name: 'Fallout: New Vegas',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/3428aaab2c674c98b3acb789dcfaa548/EGS_FalloutNewVegas_ObsidianEntertainment_S2_1200x1600-866fe8b8f56e2e7bb862c49bf0627b9a?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '44,75',
      discountedPrice: '179'
    },
    {
      id:13,
      name: 'Shadow of the Tomb Raider: Definitive Edition',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },
    {
      id:14,
      name: 'Mount & Blade II: Bannerlord',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/aeac94c7a11048758064b82f8f8d20ed/EGS_MountBladeIIBannerlord_TaleWorldsEntertainment_S2_1200x1600-67b826955ba37d7d6c33ec578aaa2d54?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-80 %',
      originalPrice: '499,99',
      discountedPrice: '899,99'
    },
    {
      id:15,
      name: 'Gas Station Simulator',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/spt-assets/e48463d2c1fc4e17a3860fbbc8e54edc/gas-station-simulator-6na58.jpg?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '143,99',
      discountedPrice: '179,99'
    },
    {
      id:16,
      name: 'Shadow of the Tomb Raider: Definitive Edition',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },

    {
      id:17,
      name: 'Gas Station Simulator',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/spt-assets/e48463d2c1fc4e17a3860fbbc8e54edc/gas-station-simulator-6na58.jpg?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '143,99',
      discountedPrice: '179,99'
    },
    {
      id:18,
      name: 'Shadow of the Tomb Raider: Definitive Edition',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },
    {
      id:11,
      name: 'The Callisto Protocol',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/6b0541b5d9aa476cbf407643ab3b1d7d/EGS_TheCallistoProtocol_StrikingDistanceStudios_S2_1200x1600-1e31eacc92833279f5b7a8d07cd3826c?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-70 %',
      originalPrice: '300',
      discountedPrice: '1200'
    },
    {
      id:12,
      name: 'Fallout: New Vegas',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/3428aaab2c674c98b3acb789dcfaa548/EGS_FalloutNewVegas_ObsidianEntertainment_S2_1200x1600-866fe8b8f56e2e7bb862c49bf0627b9a?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '44,75',
      discountedPrice: '179'
    },
    {
      id:13,
      name: 'Shadow of the Tomb Raider: Definitive Edition',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-50 %',
      originalPrice: '599',
      discountedPrice: '219.80'
    },
    {
      id:14,
      name: 'Mount & Blade II: Bannerlord',
      description: 'Descripción del Producto 1',
      image: 'https://cdn1.epicgames.com/offer/aeac94c7a11048758064b82f8f8d20ed/EGS_MountBladeIIBannerlord_TaleWorldsEntertainment_S2_1200x1600-67b826955ba37d7d6c33ec578aaa2d54?h=480&quality=medium&resize=1&w=360',
      category: 'Juego base',
      title: 'Grand Theft Auto V: Premium Edition',
      discount: '-80 %',
      originalPrice: '499,99',
      discountedPrice: '899,99'
    },
    

    // Añadir más productos según sea necesario
  ];


  paginaIndex2 = 0;
  // ultimaPagina2 = Math.floor(this.products_v2.length / 3);
  private recidirRedondear2(cantidad: number) {
    let numeroExtraido: number;
    numeroExtraido = cantidad - Math.trunc(cantidad);

    if (numeroExtraido > 0.1) {
        this.ultimaPagina2 = cantidad - 1;
    } else {
        this.ultimaPagina2 = cantidad - 1;
    }

    return this.ultimaPagina2;
}



  prev_v2() {
    if(this.paginaIndex2 > 0){
      this.paginaIndex2--;
    }
    // alert("Resultado: " + this.ultimaPagina2);

  }


  next_v2() {


    // const cantidadDecimal = this.products_v2.length / 6;
    this.recidirRedondear2(this.cantidadDecimal2);

    // Tu lógica actual de next_v2 aquí
    if (this.paginaIndex2 < this.ultimaPagina2) {
        this.paginaIndex2++;
    }
  }

 



 

  detalle_Producto(detalles_id:number){
  // detalle_Producto(detalles_id:string){
    this.router.navigate(['/preview', detalles_id]);

    // this.localStorage.guardarItem('');
  }

}
