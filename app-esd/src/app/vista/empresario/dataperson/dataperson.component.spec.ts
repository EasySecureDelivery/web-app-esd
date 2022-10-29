import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapersonComponent } from './dataperson.component';

describe('DatapersonComponent', () => {
  let component: DatapersonComponent;
  let fixture: ComponentFixture<DatapersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
