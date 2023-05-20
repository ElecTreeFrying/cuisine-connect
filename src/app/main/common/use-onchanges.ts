import { DestroyRef, OnChanges, SimpleChange, SimpleChanges, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Observable, Subject } from "rxjs";

export function useOnChanges<T extends OnChanges>(component : T, input: string): Observable<SimpleChange> {

  let originalNgOnChanges = component.ngOnChanges;
  const stream$ = new Subject<SimpleChange>();
  const wrapper = (changes: SimpleChanges) => {
    const simpleChange = changes[input];

    if (simpleChange) {
      stream$.next(simpleChange);
    }

    originalNgOnChanges(changes);
  }
  component.ngOnChanges = wrapper;

  return stream$.pipe(
    takeUntilDestroyed(inject(DestroyRef))
  );
}
