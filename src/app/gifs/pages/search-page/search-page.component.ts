import { Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsProviderService } from '../../services/gifs-provider/gifs-provider.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifsService = inject(GifsProviderService);

  onSearch( query: string) {
    console.log('onSearch:', {query});
    this.gifsService.searchGifs(query);
  }
}
