import { Component, AfterViewInit, inject } from '@angular/core';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { MapDrawerPanel } from '../map-drawer-panel/map-drawer-panel';
import { MapCommunicationService } from '../../../core/layout/header/components/search-and-filter/services/map-communication.service';
import { Charger } from '../../../shared/models/charger.model';
import { mockChargers } from '../../../shared/data/mockChargers';
import { LocateUserService } from './services/locate-user';

@Component({
  selector: 'app-map-view',
  imports: [MapDrawerPanel],
  templateUrl: './map-view.html',
})
export class MapView implements AfterViewInit {
  constructor(private locateUserService: LocateUserService) {}
  private containerService = inject(MapCommunicationService);

  map!: google.maps.Map;
  userSearchMarker!: google.maps.marker.AdvancedMarkerElement;
  infoWindow!: google.maps.InfoWindow;
  center!: { lat: 54.2361; lng: -4.5481 };

  userLocation: GeolocationCoordinates | null = null;
  markers = mockChargers;
  showPanel = false;
  selectedCharger!: Charger;

  ngAfterViewInit(): void {
    this.center = { lat: 54.2361, lng: -4.5481 };
    this.initMap();
  }

  async initMap(): Promise<void> {
    //@ts-ignore
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
      google.maps.importLibrary('maps'),
      google.maps.importLibrary('marker'),
      google.maps.importLibrary('places'),
    ]);

    this.map = new Map(document.getElementById('map') as HTMLElement, {
      center: this.center,
      zoom: 6.9,
      mapId: 'DEMO_MAP_ID',
      mapTypeControl: false,
      streetViewControl: false,
    });

    const chargerMarkers = mockChargers.map((chargerLoc) => {
      const img = document.createElement('img');
      img.src = 'assets/images/voltempo-icon.png';
      img.style.cssText =
        'width: 40px; height: 40px; cursor: pointer; border: 2px solid #001388; padding: 2px; background-color: white;';

      const marker = new AdvancedMarkerElement({
        position: chargerLoc.location.coordinates,
        content: img,
        title: chargerLoc.location.name,
      });

      marker.addListener('click', () => {
        this.selectedCharger = chargerLoc;
        this.showPanel = true;
      });

      return marker;
    });

    new MarkerClusterer({ map: this.map, markers: chargerMarkers });

    const containerEl = this.containerService.container();
    if (!containerEl) return;

    const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement({
      //@ts-ignore
      includedRegionCodes: ['gb'],
      locationBias: this.center,
    });

    placeAutocomplete.id = 'place-autocomplete-input';
    containerEl.appendChild(placeAutocomplete);

    // Create marker and info window
    this.userSearchMarker = new AdvancedMarkerElement({ map: this.map });
    this.infoWindow = new google.maps.InfoWindow();

    // Handle selection from autocomplete
    placeAutocomplete.addEventListener(
      'gmp-select',
      async ({ placePrediction }: any) => {
        const place = placePrediction.toPlace();
        await place.fetchFields({
          fields: ['displayName', 'formattedAddress', 'location', 'viewport'],
        });

        if (place.viewport) {
          this.map.fitBounds(place.viewport);
        } else if (place.location) {
          this.map.setCenter(place.location);
          this.map.setZoom(17);
        }

        const content = `
          <div style="font-family: Arial, sans-serif; font-size: 14px;" class="h-fit">
            ${place.formattedAddress.replace(/\n/g, '<br/>')}<br/>
            <a href="${
              place.url
            }" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </div>
        `;

        this.infoWindow.setContent(content);
        this.infoWindow.setPosition(place.location);
        this.infoWindow.open({ map: this.map, anchor: this.userSearchMarker });
        this.userSearchMarker.position = place.location;

        this.userSearchMarker.addListener('click', () => {
          this.infoWindow.open({
            map: this.map,
            anchor: this.userSearchMarker,
            shouldFocus: false,
          });
        });

        this.infoWindow.open({
          map: this.map,
          anchor: this.userSearchMarker,
          shouldFocus: false,
        });
      }
    );
  }
}
