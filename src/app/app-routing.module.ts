import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games',
   
  children: [
    {
      path: '',
      loadChildren: './games/games.module#GamesPageModule'
    },
    {
      path: ':gameId',
      loadChildren: './games/game-detail/game-detail.module#GameDetailPageModule'
    }
  ]},
 
  { path: 'add-game', loadChildren: './add-game/add-game.module#AddGamePageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
