import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageBasicService {

  constructor() { }

  // para guardar información
  // EJEMPLO
  // guardarItem()
  guardarItem(etiqueta: string, informacion: any) {
    localStorage.setItem(etiqueta, JSON.stringify(informacion));
  }

  // Retornar información del LocalStorage
  obtenerItem(etiqueta: string) {
    const datos = localStorage.getItem(etiqueta);
    return datos ? JSON.parse(datos) : null;
  }

  // eliminar del LocalStorage
  quitarLocalStorage(etiqueta: string) {
    localStorage.removeItem(etiqueta);
  }


  /*
  Ejemplo de como utilizarlo en un componente:
  {
    constructor(private LocalstorageBasicService: LocalstorageBasicService) {}

    guardarDatos() {
      const usuario = { nombre: 'Juan', edad: 30 };
      this.LocalstorageBasicService.guardarItem('usuario', usuario);
    }

    obtenerDatos() {
      const usuario = this.LocalstorageBasicService.obtenerItem('usuario');
      console.log(usuario);
    }
  }
  
  */

}
