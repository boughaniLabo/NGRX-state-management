import {createReducer, on} from '@ngrx/store'
import { decrement, increment, reset } from './counter.actions'

export interface CounterState {
  count: number
}

export const initialCounterState = 0 

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, state=> ( state + 1)),
  on(decrement, state => (state - 1 )),
  on(reset, state =>  0 )
)