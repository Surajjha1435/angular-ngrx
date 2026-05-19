import { inject, Injectable } from "@angular/core";
import { incrementAsync, incrementSuccess } from "./counter.actions";
import { delay, map } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class CounterEffects {
    private actions$ = inject(Actions);

    incrementAsync$ = createEffect(() =>
        this.actions$.pipe(
            ofType(incrementAsync),
            delay(2000),
            map(() => incrementSuccess())
        )
    );
}
