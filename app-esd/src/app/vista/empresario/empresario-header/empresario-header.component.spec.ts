import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresarioHeaderComponent } from './empresario-header.component';

describe('EmpresarioHeaderComponent', () => {
  let component: EmpresarioHeaderComponent;
  let fixture: ComponentFixture<EmpresarioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresarioHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresarioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
