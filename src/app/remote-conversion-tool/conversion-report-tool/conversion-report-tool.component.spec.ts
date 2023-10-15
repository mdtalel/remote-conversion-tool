import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionReportToolComponent } from './conversion-report-tool.component';

describe('ConversionReportToolComponent', () => {
  let component: ConversionReportToolComponent;
  let fixture: ComponentFixture<ConversionReportToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionReportToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionReportToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
