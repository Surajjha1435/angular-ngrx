import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement } from '../store/counter.actions';

@Component({
  standalone: true,
  selector: 'app-decrement-counter-component',
  templateUrl: './decrement-counter-component.html',
  styleUrl: './decrement-counter-component.scss',
})
export class DecrementCounterComponent {
  private store = inject(Store);

  decrementCounter() {
    this.store.dispatch(decrement());
  }
}
