import { Component } from '@angular/core';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {


  mostrarCartas: boolean[] = [false, false, false, false, false, false, false, false, false];
  pokemons: any[] = [
    { nombre: 'Charmander', categoria: 'Lagartija', tipo: 'FUEGO', habilidad:'Mar llamas', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/d/d9/latest/20200214190405/Charmander_HOME.png' },
    { nombre: 'Charmeleon', categoria: 'Llama', tipo: 'FUEGO', habilidad:'Mar llamas', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/8/8b/latest/20200214192313/Charmeleon_HOME.png' },
    { nombre: 'Charizard', categoria: 'Llama', tipo: ["FUEGO VOLADOR"], habilidad:'Mar llamas', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210524165035/Charizard_HOME.png' },
    { nombre: 'Bulbasaur', categoria: 'Semilla', tipo: ["PLANTA VENENO"], habilidad:'Espesura', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/5/50/latest/20200214192839/Bulbasaur_HOME.png' },
    { nombre: 'Ivysaur', categoria: 'Semilla', tipo: ["PLANTA VENENO"], habilidad:'Espesura', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20200214190740/Ivysaur_HOME.png' },
    { nombre: 'Venusaur', categoria: 'Semilla', tipo: ["PLANTA VENENO"], habilidad:'Espesura', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20210524164854/Venusaur_HOME.png' },
    { nombre: 'Squirtle', categoria: 'Tortuguita', tipo: 'AGUA', habilidad:'Torrente', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/0/06/latest/20200214185855/Squirtle_HOME.png' },
    { nombre: 'Wartortle', categoria: 'Tortuga', tipo: 'AGUA', habilidad:'Torrente', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/f/f5/latest/20210524164743/Wartortle_HOME.png' },
    { nombre: 'Blastoise', categoria: 'Armazón', tipo: 'AGUA', habilidad:'Torrente', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20210524164802/Blastoise_HOME.png' },
  ];
  abrirPokeball(index: number) {
    this.mostrarCartas[index] = !this.mostrarCartas[index];
  }
}
