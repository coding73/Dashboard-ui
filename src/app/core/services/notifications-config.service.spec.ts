import { TestBed } from '@angular/core/testing';

import { NotificationsConfigService } from './notifications-config.service';

describe('NotificationsConfigService', () => {
  let service: NotificationsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
