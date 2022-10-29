import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpickupComponent } from './ipickup.component';

describe('IpickupComponent', () => {
  let component: IpickupComponent;
  let fixture: ComponentFixture<IpickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
