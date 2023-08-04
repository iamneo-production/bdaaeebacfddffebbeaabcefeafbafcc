import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerapplydocumentComponent } from './customerapplydocument.component';

describe('CustomerapplydocumentComponent', () => {
  
  let component: CustomerapplydocumentComponent;
  let fixture: ComponentFixture<CustomerapplydocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerapplydocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerapplydocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
