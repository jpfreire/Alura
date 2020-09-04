import { TestBed, inject } from '@angular/core/testing';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

describe('UserNotTakenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotTakenValidatorService]
    });
  });

  it('should be created', inject([UserNotTakenValidatorService], (service: UserNotTakenValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
