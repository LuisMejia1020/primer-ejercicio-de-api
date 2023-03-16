import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokedex } from './interfaces/api/pokeapi/pokedex';
import { IPokemon } from './interfaces/api/pokeapi/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {


private urlbase = "https://pokeapi.co/api/v2"
  constructor(public cliente: HttpClient) { }

  getListadoPokemon(limit?: number): Observable<IPokedex>{
    const url = (limit) ? `${this.urlbase}/pokemon/?limit=${limit}` : `${this.urlbase}/pokemon/`
    return this.cliente.get<IPokedex>(url)
  }

  getDetallesPokemon(url: string): Observable<IPokemon>{
    return this.cliente.get<IPokemon>(url)
  }

}
