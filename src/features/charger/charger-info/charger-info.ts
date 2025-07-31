import { Component, input } from '@angular/core';
import { Charger } from '../../../shared/models/charger.model';
//import { NgClass } from '@angular/common';

@Component({
  selector: 'app-charger-info',
  imports: [],
  templateUrl: './charger-info.html',
})
export class ChargerInfo {
  charger = input<Charger>();

  getStatusDotColor(status: string): string {
    switch (status) {
      case 'Available':
        return 'bg-green-400';
      case 'Maintenance':
        return 'bg-amber-400';
      case 'In Use':
        return 'bg-sky-400';
      default:
        return 'bg-gray-400';
    }
  }

  handleGetDirections() {
    console.log('get directions clicked!');
  }

  onCloseClick() {
    console.log('close button clicked!');
  }
}
