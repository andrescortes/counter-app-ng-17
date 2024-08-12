import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrl: './button-add.component.css'
})
export class ButtonAddComponent {
  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter<number>();

  increment(): void {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
}
