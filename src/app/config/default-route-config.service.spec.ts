import { TestBed } from '@angular/core/testing';

import { DefaultRouteConfigService } from './default-route-config.service';

describe('DefaultRouteConfigService', () => {
  let service: DefaultRouteConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultRouteConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
