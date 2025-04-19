import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { DataService } from '../data-service';
import { Game } from '../server/models/games';

@Component({
  selector: 'app-games-list',
  imports: [MatCardModule],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];

  get gamesList() {
    return this.games;
  }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getGames().subscribe((data: Game[]) => {
      this.games = data;
    });
  }

  navigateToGame(id: number): void {
    switch (id) {
      case 0:
        this.router.navigate(['/math-game']);
        break;
      default:
        break;
    }
  }
}
