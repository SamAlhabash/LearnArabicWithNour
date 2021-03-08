import { TestBed } from '@angular/core/testing';

import { ExcerciseResolver } from './excercise.resolver';

describe('ExcerciseResolver', () => {
  let resolver: ExcerciseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExcerciseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
