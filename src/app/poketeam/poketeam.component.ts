import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Directive, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-poketeam',
  templateUrl: './poketeam.component.html',
  styleUrls: ['./poketeam.component.scss'],
})
export class PoketeamComponent implements OnInit {
  pokemons: any[] = [];
  pokeTeam: any[] = [];
  pokeEnemyTeam: any[] = [];
  pokeTeamMoves: any[] = [];
  pokeEnemyTeamMoves: any[] = [];
  pokes: any[] = [];
  pokes2: any[] = [];
  progressSpinner!: boolean;
  progressSpinner2!: boolean;

  pokeTeamFinal: any[] = [];
  pokeEnemyTeamFinal: any[] = [];

  loadPokes() {
    for (var i = 0; i < 6; i++) {
      var pokeX = new poke();
      pokeX.name = this.pokeTeam[i].name;

      pokeX.moves.push(this.pokeTeamMoves.slice(0, 4));

      pokeX.image = this.pokeTeam[i].sprites.front_default;
      for (var j = 0; j < 4; j++) {
        this.pokeTeamMoves.shift();
      }
      pokeX.type1 = this.pokeTeam[i].types[0].type.name;
      if (this.pokeTeam[i].types[1]) {
        pokeX.type2 = this.pokeTeam[i].types[1].type.name;
      }

      let pokemon = {
        name: pokeX.name,
        type1: pokeX.type1,
        type2: pokeX.type2,
        move: pokeX.moves,
        img: pokeX.image,
      };
      this.pokes.push(pokemon);
    }

    console.log(this.pokes);
  }

  loadEnemyPokes() {
    for (var i = 0; i < 6; i++) {
      var pokeX = new poke();
      pokeX.name = this.pokeEnemyTeam[i].name;

      pokeX.moves.push(this.pokeEnemyTeamMoves.slice(0, 4));

      pokeX.image = this.pokeEnemyTeam[i].sprites.front_default;
      for (var j = 0; j < 4; j++) {
        this.pokeEnemyTeamMoves.shift();
      }
      pokeX.type1 = this.pokeEnemyTeam[i].types[0].type.name;
      if (this.pokeEnemyTeam[i].types[1]) {
        pokeX.type2 = this.pokeEnemyTeam[i].types[1].type.name;
      }

      let pokemon = {
        name: pokeX.name,
        type1: pokeX.type1,
        type2: pokeX.type2,
        move: pokeX.moves,
        img: pokeX.image,
      };
      this.pokes2.push(pokemon);
    }
  }

  constructor(private http: HttpClient, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadPokes();
    this.pokemons = this.apiService.pokemons;
  }

  getRandomTeam() {
    this.pokeTeamMoves = [];
    this.progressSpinner = true;
    this.pokeTeam = [];
    for (var i = 0; i < 6; i++) {
      this.pokeTeam.push(this.getRandomItem(this.pokemons));
    }

    console.log(this.pokeTeam);
    this.apiService.loadMoves(this.pokeTeam);

    console.log(this.pokeTeamMoves);

    setTimeout(() => {
      this.pokeTeamMoves = this.apiService.pokeMovesNames1;
      this.pokes = [];
      this.loadPokes();
      this.progressSpinner = false;
    }, 1500);
  }

  getRandomEnemy() {
    this.progressSpinner2 = true;
    this.pokeEnemyTeam = [];
    for (var i = 0; i < 6; i++) {
      this.pokeEnemyTeam.push(this.getRandomItem(this.pokemons));
    }
    this.apiService.loadMoves(this.pokeEnemyTeam);
    this.pokeEnemyTeamMoves = this.apiService.pokeMovesNames1;

    setTimeout(() => {
      this.pokes2 = [];
      this.loadEnemyPokes();
      this.progressSpinner2 = false;
      this.apiService.pokeMovesNames1 = [];
    }, 1000);
  }

  getRandomItem(array: any) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);

    // get random item
    const item = array[randomIndex];

    return item;
  }
}

class poke {
  name!: string;
  type1!: string;
  type2!: string;
  moves: any[] = [];
  image!: string;
}
