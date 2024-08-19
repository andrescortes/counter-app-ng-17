import { Component } from '@angular/core';
import { TasksService } from "../services/tasks.service";

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css'
})
export class SubtitleComponent {

  constructor(private readonly tasksService: TasksService) {
  }

  get items(): number {
    return this.tasksService.tasks.length;
  }
}
