import { TestBed } from '@angular/core/testing';

import { DfLibraryService } from './df-library.service';

describe('DfLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DfLibraryService = TestBed.get(DfLibraryService);
    expect(service).toBeTruthy();
  });
});
