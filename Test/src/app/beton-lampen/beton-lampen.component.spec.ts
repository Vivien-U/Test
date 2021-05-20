import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetonLampenComponent } from './beton-lampen.component';

describe('BetonLampenComponent', () => {
  let component: BetonLampenComponent;
  let fixture: ComponentFixture<BetonLampenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetonLampenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetonLampenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
