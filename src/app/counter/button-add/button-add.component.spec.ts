import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ButtonAddComponent} from "./button-add.component";

describe('ButtonAddComponent', () => {
  let fixture: ComponentFixture<ButtonAddComponent>;
  let component: ButtonAddComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ButtonAddComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('increment function', () => {
    it('should be increment the counter', () => {
      const eventEmitSpy = spyOn(component.counterChange, 'emit');
      component.increment();
      expect(component.counter).toBe(1);
      expect(eventEmitSpy).toHaveBeenCalledWith(1);
    });

    it('should be emit value incremented', () => {
      let counter: number = 0;
      component.counterChange.subscribe(value => {
        counter = value;
      });
      component.increment();
      expect(counter).toBe(1);
    });

    it('should be incremented the counter when p', () => {
      const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
      buttonElement.click();
      expect(component.counter).toBe(1);
    });
  });
});
