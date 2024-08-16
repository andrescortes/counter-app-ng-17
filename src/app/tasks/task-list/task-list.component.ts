import { Component } from "@angular/core";
import { TasksService } from "../services/tasks.service";
import { TaskInterface } from "../models";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  constructor(
    private readonly tasksService: TasksService,
  ) {
  }

  get tasksList(): Array<TaskInterface> {
    return this.tasksService.tasks;
  }

  deleteTask(index: number): void {
    console.log({index})
    this.tasksService.deleteTask(index);
  }

  complete(task: string): void {
    this.tasksService.completedTask(task);
  }
}
