import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionToolComponent } from './conversion-tool.component';

describe('ConversionToolComponent', () => {
  let component: ConversionToolComponent;
  let fixture: ComponentFixture<ConversionToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversionToolComponent]
    });
    fixture = TestBed.createComponent(ConversionToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
