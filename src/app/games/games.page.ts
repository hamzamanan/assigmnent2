import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from './games.model';
import { GamesService } from './games.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit, OnDestroy{
games: Game[];
// gameForm: FormGroup;
// game: Game;
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){

    console.log('ionviewWILLENTER');
    this.games = this.gamesService.getAllGames();
  }

  ionViewDidEnter(){

    console.log('ionviewDIDENTER');
  }


  ionViewWillLeave(){
    console.log('ionViewWILLLEAVE');
  }

  ionViewDidLeave(){
    console.log('ionViewDIDLEAVE');
  }

  ngOnDestroy(){
    console.log('ON DESTROY');
  }

}
