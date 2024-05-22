import { createReducer, on } from '@ngrx/store';
import { Game } from '../games.models';
import { GamesActions } from './games.actions';
// import { loadGames, setGames } from './games.actions';

export type GamesState = {
  games: Game[];
  loading: boolean;
};

const initialState: GamesState = {
  games: [],
  loading: false,
};

export const gamesReducer = createReducer(
  initialState,
  on(GamesActions.load, (state) => ({ ...state, loading: true })),
  on(GamesActions.set, (state, { games }) => ({
    ...state,
    games,
    loading: false,
  })),
);
