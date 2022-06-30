import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any = [];
  cargando = true;
  productoFiltrado: any = [];

  constructor(private http:HttpClient) {
    this.cargarProducto();
   }

   private cargarProducto(){
    this.http.get('https://proyecto-urku-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe(resp =>{
      this.productos = resp;
      setTimeout(() => {
        this.cargando = false;
        
      }, 1000);
      //console.log(this.productos);
    })
  }
  getProducto(id: string){
    return this.http.get(`https://proyecto-urku-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  BuscarProducto(termino: string){
    this.productoFiltrado = this.productos.filter( (productos:ProductosService) =>{
      return true;
    })
  }
}
