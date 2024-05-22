import { Injectable } from '@angular/core';
import { GamesService } from '../games.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadGames, setGames } from './games.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class GamesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly gamesService: GamesService,
  ) {}

  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGames),
      exhaustMap(() =>
        this.gamesService.getAll().pipe(map((games) => setGames({ games }))),
      ),
    ),
  );
}
