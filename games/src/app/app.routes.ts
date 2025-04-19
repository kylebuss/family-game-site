import { Routes } from '@angular/router';
import { MathGameComponent } from './math-game/math-game.component';
import { GamesListComponent } from './games-list/games-list.component';

export const routes: Routes = [
  { path: '', component: GamesListComponent },
  { path: 'math-game', component: MathGameComponent },
];
