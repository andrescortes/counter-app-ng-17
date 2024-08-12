import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubtitleComponent } from './subtitle/subtitle.component';
import { TasksComponent } from "./tasks.component";
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
  declarations: [
    TasksComponent,
    SubtitleComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule {
}
