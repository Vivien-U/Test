import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolzprodukteComponent } from './holzprodukte.component';

describe('HolzprodukteComponent', () => {
  let component: HolzprodukteComponent;
  let fixture: ComponentFixture<HolzprodukteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolzprodukteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolzprodukteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
