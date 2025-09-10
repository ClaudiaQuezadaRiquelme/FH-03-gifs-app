import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../../interfaces/giphy.interfaces';
import { Gif } from '../../interfaces/gif.interface';
import { GifMapper } from '../../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const GIF_KEY = 'history';

const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const history = localStorage.getItem(GIF_KEY); // Estamos asumiendo que estará guardado un history, pero un usuario con conocimientos puede modificar el localStorage a voluntad
  return history ? JSON.parse(history) : {};
}


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

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage()); // guardar caché historial y en localstorage
  searchHistoryKeys = computed( () => Object.keys(this.searchHistory()));

  saveToLocalStorage = effect( () => {
    localStorage.setItem(GIF_KEY, JSON.stringify(this.searchHistory()));
  });

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

  searchGifs(query: string): Observable<Gif[]> { // https://api.giphy.com/v1/gifs/search?api_key=fpBLP0AcrZUrTX7aczQWnaWPrRFic8TF&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
    return this.http.get<GiphyResponse>(`${ environment.apiUrl}/gifs/search`, {
      params: {
        api_key: environment.apikey,
        q: query,
        limit: 20
      }
    }).pipe(
      map(({ data }) => data),
      map( (items) => GifMapper.mapGiphyItemsToGifArray(items)),

      // Historial de busqueda
      tap( (items) => {
        this.searchHistory.update( (history) => ({
          ...history,
          [query.toLowerCase()]: items,
        }));
      })
    );


    // .subscribe( (res) => {
    //   console.log('http res:', res);
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
    // })
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
