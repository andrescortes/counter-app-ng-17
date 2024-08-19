import { TasksService } from "./tasks.service";
import { fakeAsync, tick } from "@angular/core/testing";
import { delay, interval, of, take } from "rxjs";

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  describe('Tasks property', () => {
    it('should be tasks property has 6 items', () => {
      expect(service.tasks)
        .withContext('The array must be 6 length')
        .toHaveSize(5);
    });
  });

  describe('deleteTask', () => {
    it('should be deleted from tasks array', () => {
      const lastItemIndex = service.tasks.length - 1;
      const tasksToBeDeleted = service.tasks[lastItemIndex];

      service.deleteTask(4);

      expect(service.tasks).toHaveSize(4);
      expect(service.tasks.includes(tasksToBeDeleted)).toBeFalse();
    });

    it('should be not deleted', () => {
      service.deleteTask(5);

      expect(service.tasks).toHaveSize(5);
    });
  });

  describe('mocking service', () => {
    it('should be called the completedTask function', () => {
      const spy = jasmine.createSpyObj<TasksService>('TasksService', ['deleteTask', 'completedTask'], {tasks: []});

      expect(spy.completedTask.calls.count()).toBe(0);
    });

    it('should run timeout callback with delay after call tick with millis', fakeAsync(() => {
      let called = false;
      setTimeout(() => {
        called = true;
      }, 100);
      tick(100);
      expect(called).toBe(true);
    }));

    it('should run new macro task callback with delay after call tick with millis', fakeAsync(() => {
      function nestedTimer(cb: () => any): void {
        setTimeout(() => setTimeout(() => cb()));
      }

      const callback = jasmine.createSpy('callback');
      nestedTimer(callback);
      expect(callback).not.toHaveBeenCalled();
      tick(0);
      // the nested timeout will also be triggered
      expect(callback).toHaveBeenCalled();
    }));

    it('should not run new macro task callback with delay after call tick with millis', fakeAsync(() => {
      function nestedTimer(cb: () => any): void {
        setTimeout(() => setTimeout(() => cb()));
      }

      const callback = jasmine.createSpy('callback');
      nestedTimer(callback);
      expect(callback).not.toHaveBeenCalled();
      tick(0, {processNewMacroTasksSynchronously: false});
      // the nested timeout will not be triggered
      expect(callback).not.toHaveBeenCalled();
      tick(0);
      expect(callback).toHaveBeenCalled();
    }));

    it('should get Date diff correctly in fakeAsync', fakeAsync(() => {
      const start = Date.now();
      tick(100);
      const end = Date.now();
      expect(end - start).toBe(100);
    }));

    describe('use jasmine.clock()', () => {
      // need to config __zone_symbol__fakeAsyncPatchLock flag
      // before loading zone.js/testing
      beforeEach(() => {
        jasmine.clock().install();
      });

      afterEach(() => {
        jasmine.clock().uninstall();
      });

      it('should auto enter fakeAsync', () => {
        // is in fakeAsync now, don't need to call fakeAsync(testFn)
        let called = false;
        setTimeout(() => {
          called = true;
        }, 100);
        jasmine.clock().tick(100);
        expect(called).toBe(true);
      });
    });

    it('should get Date diff correctly in fakeAsync with rxjs scheduler', fakeAsync(() => {
      // need to add `import 'zone.js/plugins/zone-patch-rxjs-fake-async'
      // to patch rxjs scheduler
      let result = '';
      of('hello')
        .pipe(delay(1000))
        .subscribe((v) => {
          result = v;
        });

      expect(result).toBe('');

      tick(1000);

      expect(result).toBe('hello');

      const start = new Date().getTime();
      let dateDiff = 0;
      interval(1000)
        .pipe(take(3))
        .subscribe(() => (dateDiff = new Date().getTime() - start));

      tick(1000);

      expect(dateDiff).toBe(1000);

      tick(1000);

      expect(dateDiff).toBe(2000);

      tick(1000);

      expect(dateDiff).toBe(3000);

      tick(1000);

      expect(dateDiff).toBe(3000);
    }));
  });
  describe('using a spy in a service', () => {
    it('should be full the tasks arrays', () => {
      expect({}).toEqual(jasmine.objectContaining({}));
    });
  });
});
