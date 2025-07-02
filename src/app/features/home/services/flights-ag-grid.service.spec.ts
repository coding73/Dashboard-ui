import { TestBed } from '@angular/core/testing';

import { FlightsAgGridService } from './flights-ag-grid.service';

describe('FlightsAgGridService', () => {
  let service: FlightsAgGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsAgGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
