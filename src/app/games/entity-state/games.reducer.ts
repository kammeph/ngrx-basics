import {
  createFeature,
  createReducer,
  // createSelector,
  on,
} from '@ngrx/store';
import { Game } from '../games.models';
import { GamesActions } from './games.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
// import { loadGames, setGames } from './games.actions';

export interface GamesState extends EntityState<Game> {
  query: string;
  loading: boolean;
}

export const gamesAdapter = createEntityAdapter<Game>();

const initialState = gamesAdapter.getInitialState({
  query: '',
  loading: false,
});

const gamesReducer = createReducer(
  initialState,
  on(GamesActions.load, (state) => ({ ...state, loading: true })),
  on(GamesActions.set, (state, { games }) =>
    gamesAdapter.setAll(games, { ...state, loading: false }),
  ),
);

export const gamesFeature = createFeature({
  name: 'games',
  reducer: gamesReducer,
  extraSelectors: ({ selectGamesState }) => ({
    ...gamesAdapter.getSelectors(selectGamesState),
  }),
});
