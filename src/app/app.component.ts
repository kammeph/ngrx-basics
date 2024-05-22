import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from './games/games.models';
import { GamesService } from './games/games.service';
import { Store } from '@ngrx/store';
import { selectGames } from './games/state/games.selector';
import { addGame, loadGames } from './games/state/games.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = signal('');
  public year = signal(2024);
  public games = signal<Game[]>([]);

  constructor() {}

  public onSubmit(): void {
    console.log(this.title(), this.year());
  }
}
