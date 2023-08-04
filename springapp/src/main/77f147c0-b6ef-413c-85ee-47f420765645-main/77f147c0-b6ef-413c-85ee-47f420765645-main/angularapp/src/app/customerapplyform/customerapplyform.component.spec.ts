import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerapplyformComponent } from './customerapplyform.component';

describe('CustomerapplyformComponent', () => {
  
  let component: CustomerapplyformComponent;
  let fixture: ComponentFixture<CustomerapplyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerapplyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerapplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
