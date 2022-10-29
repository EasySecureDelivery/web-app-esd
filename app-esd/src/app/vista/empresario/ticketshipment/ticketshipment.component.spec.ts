import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketshipmentComponent } from './ticketshipment.component';

describe('TicketshipmentComponent', () => {
  let component: TicketshipmentComponent;
  let fixture: ComponentFixture<TicketshipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketshipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
