import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshipmentstransportComponent } from './myshipmentstransport.component';

describe('MyshipmentstransportComponent', () => {
  let component: MyshipmentstransportComponent;
  let fixture: ComponentFixture<MyshipmentstransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyshipmentstransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyshipmentstransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
