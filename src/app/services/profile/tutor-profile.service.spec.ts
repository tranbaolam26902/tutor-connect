import { TestBed } from '@angular/core/testing';

import { TutorProfileService } from './tutor-profile.service';

describe('TutorProfileService', () => {
  let service: TutorProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
