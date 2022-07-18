import { TestBed } from '@angular/core/testing';

import { ManageInteractionService } from './manage-interaction.service';

describe('ManageInteractionService', () => {
  let service: ManageInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
