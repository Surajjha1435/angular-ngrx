import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount, selectLoading } from '../store/counter.selector';

@Component({
  standalone: true,
  selector: 'app-counter-display',
  imports: [AsyncPipe, NgIf],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.scss',
})
export class CounterDisplay {
  private store = inject(Store);

  count$ = this.store.select(selectCount);
  loading$ = this.store.select(selectLoading);
}
