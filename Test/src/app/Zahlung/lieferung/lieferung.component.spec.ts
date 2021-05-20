import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieferungComponent } from './lieferung.component';

describe('LieferungComponent', () => {
  let component: LieferungComponent;
  let fixture: ComponentFixture<LieferungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieferungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieferungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
