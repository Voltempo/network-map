import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocateUserService {
  private userLocationSubject =
    new BehaviorSubject<GeolocationCoordinates | null>(null);
  userLocation$ = this.userLocationSubject.asObservable();

  constructor() {}

  locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = position.coords;
          console.log('Location received:', userLocation);
          this.userLocationSubject.next(userLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
    }
  }
}
