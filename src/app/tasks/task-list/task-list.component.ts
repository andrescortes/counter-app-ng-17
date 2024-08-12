import { Component } from "@angular/core";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Array<string> = [
    'Soccer',
    'Reading',
    'Speaking',
    'Writing',
    'Listening'
  ];
}
