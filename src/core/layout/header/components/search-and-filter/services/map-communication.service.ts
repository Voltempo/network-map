import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MapCommunicationService {
  container = signal<HTMLElement | null>(null);
}
