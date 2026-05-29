import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../servicios/carritoService';
import { FavoritoService } from '../../servicios/favorito-service';


@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  constructor(public carritoService: CarritoService, public favoritoService: FavoritoService) { }
}
