import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCRUDparentComponent } from './employee-crudparent.component';

describe('EmployeeCRUDparentComponent', () => {
  let component: EmployeeCRUDparentComponent;
  let fixture: ComponentFixture<EmployeeCRUDparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCRUDparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCRUDparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
