import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  pokemons: any[] = [];
  pokeMoves: any[] = [];
  pokeMovesNames1: any[] = [];

  loadPokes() {
    this.http.get(this.pokeUrl).subscribe((data1: any) => {
      data1.results.forEach((data2: any) => {
        this.http.get(data2.url).subscribe((pokemon: any) => {
          setTimeout(() => {
            this.pokemons.push(pokemon);
            this.pokemons.sort(function (a, b) {
              return a.id - b.id;
            });
          }, 100);
        });
      });
    });
    return this.pokemons;
  }

  loadMoves(pokeTeam: any) {
    this.pokeMovesNames1 = [];
    pokeTeam.forEach((data: any) => {
      for (var i = 0; i < 4; i++) {
        this.pokeMoves.push(
          data.moves[Math.floor(Math.random() * data.moves.length)]
        );
      }
    });
    this.pokeMoves.forEach((data: any) => {
      this.http.get(data.move.url).subscribe((data) => {
        this.pokeMovesNames1.push(data);
      });
    });
    console.log(this.pokeMovesNames1);
  }

  getRandomItem(array: any) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);

    // get random item
    const item = array[randomIndex];

    return item;
  }
}
