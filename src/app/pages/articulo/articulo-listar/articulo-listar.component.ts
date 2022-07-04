import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo.model';
import { ArticuloService } from '../../../service/articulo.service';

@Component({
  selector: 'app-articulo-listar',
  templateUrl: './articulo-listar.component.html',
  styleUrls: ['./articulo-listar.component.css'],
})
export class ArticuloListarComponent implements OnInit {
  listararticulos: Articulo[] = [];

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    console.log('ingreso a ngOnInit');
    this.articuloService.getArticulos().subscribe(res => console.log(res));
  }
}
