import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUserComponent } from './http-user.component';

describe('HttpUserComponent', () => {
  let component: HttpUserComponent;
  let fixture: ComponentFixture<HttpUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
