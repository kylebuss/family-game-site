import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-header',
  imports: [MatIconModule],
  templateUrl: './games-header.component.html',
  styleUrl: './games-header.component.css'
})
export class GamesHeaderComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
