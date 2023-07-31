import { createEffect, Actions, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(() =>
    this.actions$.pipe(
      ofType(increment, decrement),
      tap((action) => {
        console.log(action);
        localStorage.setItem('count', action.value.toString());
      })
    )
  );
  constructor(private actions$: Actions) {}
}
