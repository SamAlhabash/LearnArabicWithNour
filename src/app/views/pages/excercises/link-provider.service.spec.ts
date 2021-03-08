import { TestBed } from '@angular/core/testing';

import { LinkProviderService } from './link-provider.service';

describe('LinkProviderService', () => {
  let service: LinkProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
