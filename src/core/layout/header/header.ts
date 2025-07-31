import { Component, input } from '@angular/core';
import { SearchAndFilter } from './components/search-and-filter/search-and-filter';

@Component({
  selector: 'app-header',
  imports: [SearchAndFilter],
  templateUrl: './header.html',
})
export class Header {
  visible = input<boolean>(false);

  showFilters() {}
}
