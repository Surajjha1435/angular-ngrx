import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.reducer";

export const selectCounterState = createFeatureSelector<counterState>(
    'counter'
);

export const selectCount = createSelector(
    selectCounterState,
    state => state.count
);

export const selectLoading = createSelector(
    selectCounterState,
    state => state.loading
)