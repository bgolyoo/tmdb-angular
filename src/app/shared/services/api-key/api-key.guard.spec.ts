import { TestBed, async, inject } from '@angular/core/testing';

import { ApiKeyGuard } from './api-key.guard';

describe('ApiKeyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiKeyGuard]
    });
  });

  it('should ...', inject([ApiKeyGuard], (guard: ApiKeyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
