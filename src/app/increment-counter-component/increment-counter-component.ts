import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementAsync } from '../store/counter.actions';

@Component({
  standalone: true,
  selector: 'app-increment-counter-component',
  templateUrl: './increment-counter-component.html',
  styleUrl: './increment-counter-component.scss',
})
export class IncrementCounterComponent {
  private store = inject(Store);
  incrementCounter() {
    this.store.dispatch(incrementAsync());
  }
}