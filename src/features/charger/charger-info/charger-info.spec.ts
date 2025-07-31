import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerInfo } from './charger-info';

describe('ChargerInfo', () => {
  let component: ChargerInfo;
  let fixture: ComponentFixture<ChargerInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargerInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(ChargerInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
