import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../../interfaces/giphy.interfaces';
import { Gif } from '../../interfaces/gif.interface';
import { GifMapper } from '../../mapper/gif.mapper';
import { map } from 'rxjs';

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

  searchGifs(query: string) { // https://api.giphy.com/v1/gifs/search?api_key=fpBLP0AcrZUrTX7aczQWnaWPrRFic8TF&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
    return this.http.get<GiphyResponse>(`${ environment.apiUrl}/gifs/search`, {
      params: {
        api_key: environment.apikey,
        q: query,
        limit: 20
      }
    }).pipe(
      map(({ data }) => data),
      map( items => GifMapper.mapGiphyItemsToGifArray(items)),
    );


    // .subscribe( (res) => {
    //   console.log('http res:', res);
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
    // })


  }

}
