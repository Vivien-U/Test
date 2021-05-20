import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetonFigurenComponent } from './beton-figuren.component';

describe('BetonFigurenComponent', () => {
  let component: BetonFigurenComponent;
  let fixture: ComponentFixture<BetonFigurenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetonFigurenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetonFigurenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
