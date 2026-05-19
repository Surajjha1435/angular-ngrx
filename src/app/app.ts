import { Component, signal } from '@angular/core';
import { CounterDisplay } from './counter-display/counter-display';
import { IncrementCounterComponent } from './increment-counter-component/increment-counter-component';
import { DecrementCounterComponent } from './decrement-counter-component/decrement-counter-component';
import { ResetCounterComponent } from './reset-counter-component/reset-counter-component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CounterDisplay, IncrementCounterComponent, DecrementCounterComponent, ResetCounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-ngrx');
}
