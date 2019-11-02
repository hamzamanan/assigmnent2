import { Injectable } from '@angular/core';
import { Game } from './games.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
 gamesChanged = new Subject<Game[]>();
 private games: Game[] = [
    {
  id: 'g1',
  title: 'Dota2',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/DOTA-logo-wis.png',
  gamenames: 'THIS IS DOTA 2 A VERY ADDICTIVE GAME'
  },
  {
  id: 'g2',
  title: 'COD4',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/61_shooting.JPG',
  gamenames: 'THIS IS COD4 A VERY ADDICTIVE GAME'
  }
  ];


  constructor() { }

  getAllGames() {
return [...this.games]; 
  }

  getGame(gameId: string) {
return {...this.games.find(game => {
  return game.id === gameId;
})}; 
  }
  deleteGame(gameId: string) {
 this.games = this.games.filter(game => {
   return game.id !== gameId;
 });
  }

  addGame(game: Game) {
    this.games.push(game);
    this.gamesChanged.next(this.games);
  }
  }
