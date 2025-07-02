import { TestBed } from '@angular/core/testing';
import { AgGridMapperService } from './ag-grid-mapper.service';

describe('AgGridMapperService', () => {
  let service: AgGridMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgGridMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
