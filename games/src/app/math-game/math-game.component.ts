import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GamesHeaderComponent } from '../games-header/games-header.component';
import { PlayersComponent } from '../players/players.component';

@Component({
  selector: 'app-math-game',
  imports: [GamesHeaderComponent, MatButtonModule, MatFormFieldModule, PlayersComponent],
  templateUrl: './math-game.component.html',
  // If you move the math-game.component.css file to the app.component.css, update the path here
  styleUrl: './math-game.component.css'
})

export class MathGameComponent {
  // Add any properties or methods you need for your game logic here
}
