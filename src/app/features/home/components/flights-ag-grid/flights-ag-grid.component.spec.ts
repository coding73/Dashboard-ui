import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsAgGridComponent } from './flights-ag-grid.component';

describe('FlightsAgGridComponent', () => {
  let component: FlightsAgGridComponent;
  let fixture: ComponentFixture<FlightsAgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsAgGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
