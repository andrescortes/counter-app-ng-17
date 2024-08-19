import { TasksService } from "../components/tasks/services/tasks.service";

const tasksServiceMockSpy = () => jasmine.createSpyObj<TasksService>(
  'TasksService',
  [
    'deleteTask',
    'completedTask'
  ], {
    tasks: [
      {task: 'Soccer', completed: false},
      {task: 'Reading', completed: false},
      {task: 'Speaking', completed: false}
    ],
  }
)

export default tasksServiceMockSpy;
