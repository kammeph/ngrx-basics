import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesState } from './games.reducer';

export const selectGamesFeature = createFeatureSelector<GamesState>('games');

export const selectGames = createSelector(
  selectGamesFeature,
  (state: GamesState) => state.games,
);

export const selectLoading = createSelector(
  selectGamesFeature,
  (state: GamesState) => state.loading,
);
