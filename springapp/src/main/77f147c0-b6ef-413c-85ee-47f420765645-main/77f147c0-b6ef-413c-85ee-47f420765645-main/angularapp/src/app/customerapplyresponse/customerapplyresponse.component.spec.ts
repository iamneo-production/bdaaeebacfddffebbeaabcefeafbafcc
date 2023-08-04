import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerapplyresponseComponent } from './customerapplyresponse.component';

describe('CustomerapplyresponseComponent', () => {
  
  let component: CustomerapplyresponseComponent;
  let fixture: ComponentFixture<CustomerapplyresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerapplyresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerapplyresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
