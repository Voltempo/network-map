import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDrawerPanel } from './map-drawer-panel';

describe('MapDrawerPanel', () => {
  let component: MapDrawerPanel;
  let fixture: ComponentFixture<MapDrawerPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapDrawerPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(MapDrawerPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
