import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRegistrationComponent } from './ride-registration.component';

describe('RideRegistrationComponent', () => {
  let component: RideRegistrationComponent;
  let fixture: ComponentFixture<RideRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
