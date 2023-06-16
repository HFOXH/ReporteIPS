import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByPatientComponent } from './report-by-patient.component';

describe('ReportByPatientComponent', () => {
  let component: ReportByPatientComponent;
  let fixture: ComponentFixture<ReportByPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportByPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
