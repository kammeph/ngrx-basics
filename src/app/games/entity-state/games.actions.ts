import {
  //   createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Game } from '../games.models';

// export const loadGames = createAction('[Games] Load');

// export const setGames = createAction('[Games] Set', props<{ games: Game[] }>());

export const GamesActions = createActionGroup({
  source: 'Games',
  events: {
    load: emptyProps(),
    set: props<{ games: Game[] }>(),
  },
});
