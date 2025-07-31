import { Component, input, effect, ElementRef, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  featherSearch,
  featherFilter,
  featherNavigation2,
  featherKey,
} from '@ng-icons/feather-icons';
import { MapCommunicationService } from './services/map-communication.service';

@Component({
  selector: 'app-search-and-filter',
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      featherSearch,
      featherFilter,
      featherNavigation2,
      featherKey,
    }),
  ],
  templateUrl: './search-and-filter.html',
})
export class SearchAndFilter {
  readonly searchContainer =
    viewChild<ElementRef<HTMLElement>>('searchContainer');

  constructor(private containerService: MapCommunicationService) {}

  ngAfterViewInit(): void {
    const el = this.searchContainer()?.nativeElement;
    if (el) {
      this.containerService.container.set(el);
    }
  }

  handleFilterClick(e: any) {
    e.preventDefault();
  }

  handleDirectionsClick(e: any) {
    e.preventDefault();
  }
}
