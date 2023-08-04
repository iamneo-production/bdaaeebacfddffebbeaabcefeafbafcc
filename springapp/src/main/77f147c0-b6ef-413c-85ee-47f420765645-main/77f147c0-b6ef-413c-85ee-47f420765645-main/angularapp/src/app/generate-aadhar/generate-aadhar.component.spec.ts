import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAadharComponent } from './generate-aadhar.component';

describe('GenerateAadharComponent', () => {
  let component: GenerateAadharComponent;
  let fixture: ComponentFixture<GenerateAadharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateAadharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateAadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
