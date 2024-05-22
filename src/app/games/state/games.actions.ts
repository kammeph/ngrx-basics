import { createAction, props } from '@ngrx/store';
import { Game } from '../games.models';

export const loadGames = createAction('[Games] Load');

export const setGames = createAction('[Games] Set', props<{ games: Game[] }>());
