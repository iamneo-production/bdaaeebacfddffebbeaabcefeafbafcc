import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiondocumentsComponent } from './correctiondocuments.component';

describe('CorrectiondocumentsComponent', () => {
  let component: CorrectiondocumentsComponent;
  let fixture: ComponentFixture<CorrectiondocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectiondocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectiondocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
