import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games/games.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../games/games.model';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.page.html',
  styleUrls: ['./add-game.page.scss'],
})
export class AddGamePage implements OnInit {
gameForm: FormGroup;
game: Game;

constructor(private gamesService: GamesService, private formBuilder: FormBuilder, private router: Router) { }

ngOnInit() {

  this.formInitializer();
}
formInitializer() {
  this.gameForm = this.formBuilder.group({
    id: new FormControl(Math.random().toPrecision()),
    title: [null, [Validators.required]],
    imageUrl: [null, [Validators.required]],
    gamenames: [null, [Validators.required]]
  });
}
onAddGame() {
this.game = this.gameForm.value;
this.gamesService.addGame(this.game);
this.router.navigate(['./games']);
}
}
