import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      {id: 12, name:'Toto Cutugno'},
      {id: 13, name:'Enzo Iacchetti'},
      {id: 14, name:'Pino Scotto'},
      {id: 15, name:'Richard Benson'},
      {id: 16, name:'Germano Mosconi'},
      {id: 17, name:'Andrea Dipré'},
      {id: 18, name:'Sara Tommasi'},
      {id: 19, name:'Immanuel Casto'},
      {id: 20, name:'Ezio Greggio'},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]):number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
