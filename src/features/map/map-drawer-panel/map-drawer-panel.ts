import { Component, input, output } from '@angular/core';
import { Charger } from '../../../shared/models/charger.model';
import { ChargerInfo } from '../../charger/charger-info/charger-info';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-map-drawer-panel',
  imports: [ChargerInfo, NgStyle],
  templateUrl: './map-drawer-panel.html',
})
export class MapDrawerPanel {
  selectedCharger = input<Charger>();
  closePanel = output<boolean>();
  showPanel = input<boolean>();
  visible = input<boolean>(false);

  onClosePanel() {
    this.closePanel.emit(true);
  }
}
