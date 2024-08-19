import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleComponent } from './subtitle.component';
import { TasksService } from "../services/tasks.service";
import tasksServiceMockSpy from "../../../testing/mocks/tasksService.mock";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleComponent);
    component = fixture.componentInstance;
    tasksServiceMock = TestBed.inject(TasksService) as jasmine.SpyObj<TasksService>;
    fixture.detectChanges();
  })

  describe('Create the app', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('rendering items', () => {
    it('should be rendered message header', () => {
      const compiled: DebugElement = fixture.debugElement;
      const pEl: DebugElement = compiled.query(By.css('.message-header p'));
      const pNative: HTMLElement = pEl.nativeElement;

      expect(pNative.textContent).toEqual(jasmine.stringContaining('Items'));
    });

    it('should be rendered message body', () => {
      const compiled: DebugElement = fixture.debugElement;
      const strongEl: DebugElement = compiled.query(By.css('div.message-body p strong'));
      const strongNative: HTMLElement = strongEl.nativeElement;

      expect(strongNative.textContent).toEqual(jasmine.stringContaining('3'));
    });
  });

  describe('rendering items with no items', () => {
    it('should be rendered message header', () => {
      spyOnProperty(component, 'items', 'get').and.returnValue(0);

      fixture.detectChanges();

      const compiled: DebugElement = fixture.debugElement;
      const articleEl: DebugElement = compiled.query(By.css('.message'));
      const articleNative: HTMLElement = articleEl.nativeElement;
      const classes: string [] = Object.getOwnPropertyNames(articleEl.classes);

      expect(articleNative.classList).toHaveSize(3);
      expect(classes).toEqual(jasmine.arrayContaining(['message', 'is-danger', 'has-text-centered']));
    });
  });

});
