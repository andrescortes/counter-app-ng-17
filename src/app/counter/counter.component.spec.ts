import { CounterComponent } from "./counter.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ButtonDecrementComponent } from "./button-decrement/button-decrement.component";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { DebugElement } from "@angular/core";

describe('CounterComponent', (): void => {
  let fixture: ComponentFixture<CounterComponent>;
  let component: CounterComponent;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent,
        ButtonAddComponent,
        ButtonDecrementComponent
      ],
      schemas: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should be create the component', () => {
    expect(fixture).toBeTruthy();
  });

  describe('increment function', () => {
    it('should be value of counter be defined', (): void => {
      expect(component.counter).toBe(0);
    });

    it('should be increment the counter', () => {
      component.counter = 10;
      component.decrement(1);
      expect(component.counter).toBe(1);
    });

    it('should be assignment the value at counter', (): void => {
      component.counter = 10;
      component.decrement(1);
      expect(component.counter).toBe(1);
    });
  });

  describe('should be render on HTML', () => {
    it('should exist a h3', (): void => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const title = compiled.querySelector('h3')?.textContent;

      expect(title).toContain(`Counter: ${component.counter}`);
    });

    it('should exist a button', (): void => {
      const compiled = fixture.nativeElement as HTMLElement;
      const divs = compiled.querySelectorAll('div');

      expect(divs.length).toBe(1);
      expect(divs[0]?.className).toContain('button-group');
      expect(divs[0]?.children.length).toBe(2);

      const buttonElement = fixture.debugElement.query(By.css('app-button-decrement'));
      expect(buttonElement).toBeTruthy();
    });
  });

  describe('Integration testing', () => {
    it('should increment the counter', () => {
      const compiled: DebugElement = fixture.debugElement;
      const counterValue: HTMLHeadingElement | null = compiled.query(By.css('h3')).nativeElement;
      const btnAdd: HTMLButtonElement = compiled.query(By.css('#btnAdd')).nativeElement;
      btnAdd?.click();

      fixture.detectChanges();

      expect(btnAdd?.textContent).toBe('+1');
      expect(counterValue?.textContent).toBe('Counter: 1');
    });
  });
});
