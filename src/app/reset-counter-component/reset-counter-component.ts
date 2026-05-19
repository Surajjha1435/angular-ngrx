import { Component, inject, Inject } from '@angular/core';
import { reset } from '../store/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'app-reset-counter-component',
  templateUrl: './reset-counter-component.html',
  styleUrl: './reset-counter-component.scss',
})
export class ResetCounterComponent {
  private store = inject(Store);
  resetCounter() {
    this.store.dispatch(reset());
  }
}