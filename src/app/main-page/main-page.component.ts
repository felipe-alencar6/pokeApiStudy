import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @ViewChild('dt')
  dt!: Table;
  constructor(private http: HttpClient, private apiService: ApiService) {}

  pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  pokemons: any[] = [];
  cols!: any[];

  ngOnInit(): void {
    this.apiService.loadPokes();
    this.pokemons = this.apiService.pokemons;
    setTimeout(() => {
      this.dt.reset();
    }, 1000);

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
    ];

    /*
    this.http.get(this.pokeUrl).subscribe((data1: any) => {
      console.log(data1.results);

      data1.results.forEach((data2: any) => {
        this.http.get(data2.url).subscribe((pokemon: any) => {
          setTimeout(() => {
            this.pokemons.push(pokemon);
            this.pokemons.sort(function (a, b) {
              return a.id - b.id;
            });
            this.dt.reset();
          }, 100);
        });
      });
    });
    */
  }
}
