import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginproductComponent } from './loginproduct.component';

describe('LoginproductComponent', () => {
  let component: LoginproductComponent;
  let fixture: ComponentFixture<LoginproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
