import {NgModule} from "@angular/core";

import {CounterComponent} from "./counter.component";
import {ButtonAddComponent} from "./button-add/button-add.component";
import {ButtonDecrementComponent} from "./button-decrement/button-decrement.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CounterComponent,
    ButtonAddComponent,
    ButtonDecrementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
