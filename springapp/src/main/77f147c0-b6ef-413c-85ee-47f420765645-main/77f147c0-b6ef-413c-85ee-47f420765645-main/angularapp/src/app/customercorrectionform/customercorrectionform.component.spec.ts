import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercorrectionformComponent } from './customercorrectionform.component';

describe('CustomercorrectionformComponent', () => {
  let component: CustomercorrectionformComponent;
  let fixture: ComponentFixture<CustomercorrectionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercorrectionformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercorrectionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
