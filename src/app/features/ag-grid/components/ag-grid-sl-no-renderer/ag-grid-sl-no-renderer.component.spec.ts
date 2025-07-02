import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridSlNoRendererComponent } from './ag-grid-sl-no-renderer.component';

describe('AgGridSlNoRendererComponent', () => {
  let component: AgGridSlNoRendererComponent;
  let fixture: ComponentFixture<AgGridSlNoRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridSlNoRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridSlNoRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
