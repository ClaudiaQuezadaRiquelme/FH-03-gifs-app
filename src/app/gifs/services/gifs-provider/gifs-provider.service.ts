import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../../interfaces/giphy.interfaces';
import { Gif } from '../../interfaces/gif.interface';
import { GifMapper } from '../../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsProviderService {

  constructor() {
    this.loadTrendingGifs();
  }

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${ environment.apiUrl}/gifs/trending`, {
      params: {
        api_key: environment.apikey,
        limit: 20
      }
    }).subscribe( (res) => {
      console.log('http res:', res);
      const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
      console.log('http gifs:', gifs);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
    })
  }

}
