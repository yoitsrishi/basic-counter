import { Action, createReducer, on } from '@ngrx/store';
import { CounterActions, IncrementAction } from './counter.actions';

const initialState = 0;
// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => state + action.value)
// );

export function counterReducer(
  state = initialState,
  action: CounterActions | Action
) {
  if (action.type === '[Counter] Increment') {
    return state + (action as IncrementAction).value;
  }
  return state;
}
