import { Action, createReducer, on } from '@ngrx/store';
import { ParameterPagiModel } from '../parameter.model';
import * as ParameterActions from './parameter.actions';

export const parameterFeatureKey = 'parameter';

export interface ParameterState {
  pagi: Partial<ParameterPagiModel>;
}

export const initialParameter: ParameterState = {
  pagi: {
    offset: 0,
    limit: 8,
  },
};

const parameterReducer = createReducer(
  initialParameter,
  on(ParameterActions.loadPagi, (state: ParameterState, { item }) => {
    return {
      ...state,
      pagi: item,
    };
  }),
);

export function parameterReducers(state: ParameterState | undefined, action: Action) {
  return parameterReducer(state, action);
}
