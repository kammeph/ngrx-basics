import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Game } from '../games.models';
import { GamesActions } from './games.actions';
// import { loadGames, setGames } from './games.actions';

export interface GamesState {
  games: Game[];
  query: string;
  loading: boolean;
}

const initialState: GamesState = {
  games: [],
  query: '',
  loading: false,
};

const gamesReducer = createReducer(
  initialState,
  on(GamesActions.load, (state) => ({ ...state, loading: true })),
  on(GamesActions.set, (state, { games }) => ({
    ...state,
    games,
    loading: false,
  })),
);

export const gamesFeature = createFeature({
  name: 'games',
  reducer: gamesReducer,
  extraSelectors: ({ selectGames, selectQuery }) => ({
    selectFilteredGames: createSelector(
      selectGames,
      selectQuery,
      (games, query) => games.filter((game) => game.title.includes(query)),
    ),
  }),
});
