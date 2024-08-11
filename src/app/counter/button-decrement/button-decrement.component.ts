import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-decrement',
  templateUrl: './button-decrement.component.html',
  styleUrl: './button-decrement.component.css'
})
export class ButtonDecrementComponent {
  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter<number>();

  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
      this.counterChange.emit(this.counter);
    }
  }
}
