import { TestBed } from '@angular/core/testing';
import { StatsTablePageService } from './stats-table-page.service';

describe('StatsTablePageService', () => {
  let service: StatsTablePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsTablePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
