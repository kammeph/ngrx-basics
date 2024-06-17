import { createReducer, on } from '@ngrx/store';
import { Game } from '../games.models';
import { loadGames, setGames } from './games.actions';

export interface GamesState {
  games: Game[];
  loading: boolean;
}

const initialState: GamesState = {
  games: [],
  loading: false,
};

export const gamesReducer = createReducer(
  initialState,
  on(loadGames, (state) => ({ ...state, loading: true })),
  on(setGames, (state, { games }) => ({ ...state, games, loading: false })),
);
