import { Component, inject } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';
import { GifItem } from '../../interfaces/gif-item.interface';
import { GifsProviderService } from '../../services/gifs-provider/gifs-provider.service';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  // Inyección de dependencias recomendada actual
  private gifsProviderService = inject(GifsProviderService);
  public gifList = this.gifsProviderService.gifItemsListGetter;
}
