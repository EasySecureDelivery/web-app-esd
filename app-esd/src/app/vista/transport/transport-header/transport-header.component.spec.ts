import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportHeaderComponent } from './transport-header.component';

describe('TransportHeaderComponent', () => {
  let component: TransportHeaderComponent;
  let fixture: ComponentFixture<TransportHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
