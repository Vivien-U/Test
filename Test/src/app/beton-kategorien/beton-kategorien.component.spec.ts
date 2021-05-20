import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetonKategorienComponent } from './beton-kategorien.component';

describe('BetonKategorienComponent', () => {
  let component: BetonKategorienComponent;
  let fixture: ComponentFixture<BetonKategorienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetonKategorienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetonKategorienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
