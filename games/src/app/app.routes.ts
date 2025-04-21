import { Routes } from '@angular/router';
import { MathGameComponent } from './math-game/math-game.component';
import { GamesListComponent } from './games-list/games-list.component';

export const routes: Routes = [
  // Redirect to the games list by default
  { path: '', component: GamesListComponent },
  // url route for the math game
  { path: 'math-game', component: MathGameComponent },
  // add more routes for other games here
];
