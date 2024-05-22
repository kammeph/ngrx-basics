import { ApplicationConfig, isDevMode } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { gamesReducer } from './games/state/games.reducer';
import { provideEffects } from '@ngrx/effects';
import { GamesEffects } from './games/state/games.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'games', reducer: gamesReducer }),
    // provideStore({
    //   games: gamesReducer,
    // }),
    provideEffects(GamesEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
