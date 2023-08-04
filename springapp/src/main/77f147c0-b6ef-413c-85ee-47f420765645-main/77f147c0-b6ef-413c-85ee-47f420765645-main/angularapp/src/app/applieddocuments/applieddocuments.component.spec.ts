import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplieddocumentsComponent } from './applieddocuments.component';

describe('ApplieddocumentsComponent', () => {
  let component: ApplieddocumentsComponent;
  let fixture: ComponentFixture<ApplieddocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplieddocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplieddocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
