import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiederrufsbelehrungComponent } from './wiederrufsbelehrung.component';

describe('WiederrufsbelehrungComponent', () => {
  let component: WiederrufsbelehrungComponent;
  let fixture: ComponentFixture<WiederrufsbelehrungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiederrufsbelehrungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiederrufsbelehrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
