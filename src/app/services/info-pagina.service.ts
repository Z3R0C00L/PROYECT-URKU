import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-paginas-interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info: InfoPagina = {};
  equipo: any = [];
  cargada = false;

  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo()
  }

  private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      //console.log(resp);
    });
  }

  private cargarEquipo(){
    this.http.get('https://proyecto-urku-default-rtdb.firebaseio.com/equipo.json')
    .subscribe(resp => {
      
      this.equipo = resp;
      //console.log(resp);
    });
  }
}
