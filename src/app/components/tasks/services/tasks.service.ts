import { Injectable } from "@angular/core";
import { TaskInterface } from "../models";

@Injectable()
export class TasksService {
  tasks: Array<TaskInterface> = [
    {
      task: 'Soccer',
      completed: false
    }, {
      task: 'Reading',
      completed: false
    }, {
      task: 'Speaking',
      completed: false
    }, {
      task: 'Writing',
      completed: false
    }, {
      task: 'Listening',
      completed: false
    }
  ];

  deleteTask(indexTask: number): void {
    this.tasks = this.tasks.filter((_, index) => index !== indexTask);
  }

  completedTask(taskName: string): void {
    const task = this.tasks.find(task => task.task === taskName);
    if (task) {
      task.completed = !task.completed;
      const index = this.tasks.indexOf(task);
      this.tasks[index] = task;
    }
  }
}
