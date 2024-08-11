import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ButtonDecrementComponent} from "./button-decrement.component";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('ButtonDecrementComponent', () => {
  let fixture: ComponentFixture<ButtonDecrementComponent>;
  let component: ButtonDecrementComponent;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [
        ButtonDecrementComponent
      ]
    }).compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(ButtonDecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Create component', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('decrement function', () => {
    it('should decrement the counter', () => {
      component.counter = 10;
      let counter = 0;
      component.counterChange.subscribe(value => counter = value);

      component.decrement();

      expect(counter).toBe(9);
    });

    it('should be called the emitter', () => {
      component.counter = 10;
      let emitSpy = spyOn(component.counterChange, 'emit');

      component.decrement();

      expect(emitSpy).toHaveBeenCalledOnceWith(9);
    });
  });

  describe('Integration tests', () => {
    it('should increment when on press button', () => {
      component.counter = 5;
      let debugElement: DebugElement = fixture.debugElement;
      const btn: HTMLButtonElement = debugElement.query(By.css('.button')).nativeElement;
      btn?.click();

      fixture.detectChanges();

      expect(btn?.textContent).toBe('-1');
      expect(component.counter).toBe(4);
    });
  });
})
