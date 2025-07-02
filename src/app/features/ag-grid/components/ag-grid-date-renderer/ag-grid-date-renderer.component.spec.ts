import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDateRendererComponent } from './ag-grid-date-renderer.component';

describe('AgGridDateRendererComponent', () => {
  let component: AgGridDateRendererComponent;
  let fixture: ComponentFixture<AgGridDateRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridDateRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridDateRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
