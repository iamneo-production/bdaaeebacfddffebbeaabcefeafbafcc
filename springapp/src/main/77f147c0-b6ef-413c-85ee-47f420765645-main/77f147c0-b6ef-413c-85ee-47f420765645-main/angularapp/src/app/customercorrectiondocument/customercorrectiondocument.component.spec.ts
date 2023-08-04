import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercorrectiondocumentComponent } from './customercorrectiondocument.component';

describe('CustomercorrectiondocumentComponent', () => {
  let component: CustomercorrectiondocumentComponent;
  let fixture: ComponentFixture<CustomercorrectiondocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercorrectiondocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercorrectiondocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
