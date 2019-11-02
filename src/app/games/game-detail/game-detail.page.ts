import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Game } from '../games.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit, OnDestroy {
loadedGame: Game;
  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService, private router: Router,
      private alertCtrl:AlertController) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('gameId'))
      {
        this.router.navigate(['/games']);

         return;
      }
      const gameId = paraMap.get('gameId');
      this.loadedGame = this.gamesService.getGame(gameId);
    });
    }

    ionViewWillEnter(){

      console.log('ionviewWILLENTER');
     
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
  
   
    onDeleteGame(){
      this.alertCtrl.create({header:'ARE U SURE', message:'Do you really want to delete?', buttons: [
        {
        text:'Cancle',
        role:'cancle'
      },
      {
        text: 'Delete',
        handler: () =>{
          this.gamesService.deleteGame(this.loadedGame.id);
          this.router.navigate(['/games'])  

        }
      }   
    ]}).then(alertEl =>{
      alertEl.present()
    });
 
    }
}
