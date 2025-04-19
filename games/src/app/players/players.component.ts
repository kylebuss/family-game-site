import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Player } from '../server/models/players';
import { DataService } from '../data-service';

@Component({
  selector: 'app-players',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
    });
  }

  addPlayer() {
    // not implemented yet
  }
  removePlayer(index: number) {
    // not implemented yet
  }
}
