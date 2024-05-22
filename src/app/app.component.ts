import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from './games/games.models';

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
  public games = signal<Game[]>([]);

  constructor() {}

  public onSubmit(): void {
    console.log(this.title(), this.year());
  }
}
