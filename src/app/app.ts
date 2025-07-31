import { Component, signal } from '@angular/core';
import { Header } from '../core/layout/header/header';
import { MapView } from '../features/map/map-view/map-view';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, MapView],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('demo-gmaps-native');
}
