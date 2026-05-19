import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset, incrementAsync, incrementSuccess } from "./counter.actions";

export interface counterState {
    count: number;
    loading: boolean;
}
export const initialState: counterState = {
    count: 0,
    loading: false
};

export const counterReducer = createReducer(
    initialState,
    on(increment, state => ({ ...state, count: state.count + 1 })),
    on(decrement, state => ({ ...state, count: state.count - 1 })),
    on(reset, () => ({ ...initialState })),
    on(incrementAsync, state => ({ ...state, loading: true })),
    on(incrementSuccess, state => ({ ...state, count: state.count + 1, loading: false }))
);