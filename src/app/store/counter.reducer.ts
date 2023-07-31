import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => {
    if (state >= 2) {
      return state - action.value;
    }
    return state;
  }),
  on(set, (state, action) => action.value)
);

// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   if (action.type === '[Counter] Increment') {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }
