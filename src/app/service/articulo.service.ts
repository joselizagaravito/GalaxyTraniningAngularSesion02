import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../pages/models/articulo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {

  URL:string = 'http://localhost:5266/articulo';

  constructor(private http: HttpClient) {}

  getArticulos():Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.URL);
  }

}
