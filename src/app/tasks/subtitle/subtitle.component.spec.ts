import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleComponent } from './subtitle.component';
import { TasksService } from "../services/tasks.service";
import tasksServiceMockSpy from "../../testing/tasksService.mock";

describe('SubtitleComponent', () => {
  let component: SubtitleComponent;
  let fixture: ComponentFixture<SubtitleComponent>;
  let tasksServiceMock: jasmine.SpyObj<TasksService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtitleComponent],
      providers: [
        {
          provide: TasksService,
          useValue: tasksServiceMockSpy()
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitleComponent);
    component = fixture.componentInstance;
    tasksServiceMock = TestBed.inject(TasksService) as jasmine.SpyObj<TasksService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
