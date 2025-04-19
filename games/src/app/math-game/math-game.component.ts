import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { GamesHeaderComponent } from '../games-header/games-header.component';
import { PlayersComponent } from '../players/players.component';

@Component({
  selector: 'app-math-game',
  imports: [GamesHeaderComponent, MatButtonModule, MatFormFieldModule, PlayersComponent],
  templateUrl: './math-game.component.html',
  styleUrl: './math-game.component.css'
})
export class MathGameComponent {
  constructor(private router: Router) { }


}
