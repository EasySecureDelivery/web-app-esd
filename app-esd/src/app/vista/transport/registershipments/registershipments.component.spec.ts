import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistershipmentsComponent } from './registershipments.component';

describe('RegistershipmentsComponent', () => {
  let component: RegistershipmentsComponent;
  let fixture: ComponentFixture<RegistershipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistershipmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistershipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
