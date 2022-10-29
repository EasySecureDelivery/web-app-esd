import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingstatusComponent } from './shippingstatus.component';

describe('ShippingstatusComponent', () => {
  let component: ShippingstatusComponent;
  let fixture: ComponentFixture<ShippingstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
