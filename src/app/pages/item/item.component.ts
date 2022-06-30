import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: any;
  id: string = "";
  constructor(private route:ActivatedRoute, public productoService:ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( parametro => {
        //console.log(parametro['id']);
        this.productoService.getProducto(parametro['id'])
          .subscribe(producto  => {
              console.log(producto);
              this.id = parametro['id'];
              this.producto = producto;
      })
    })
  }
}
