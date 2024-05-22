import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectGames } from './games/state/games.selector';
import {
  GamesActions,
  // loadGames
} from './games/state/games.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = signal('');
  public year = signal(2024);
  public games = this.store.selectSignal(selectGames);

  constructor(private readonly store: Store) {
    this.store.dispatch(GamesActions.load());
  }

  public onSubmit(): void {
    console.log(this.title(), this.year());
  }
}
