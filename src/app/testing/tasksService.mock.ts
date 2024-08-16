import { TasksService } from "../tasks/services/tasks.service";

const tasksServiceMockSpy = () => jasmine.createSpyObj<TasksService>(
  'TasksService',
  [
    'deleteTask',
    'completedTask'
  ], {
    tasks: [{
      task: 'soccer',
      completed: false
    }],
  }
)

export default tasksServiceMockSpy;
