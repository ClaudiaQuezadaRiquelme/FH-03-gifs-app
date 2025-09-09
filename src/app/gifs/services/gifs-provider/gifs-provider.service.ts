import { inject, Injectable } from '@angular/core';
import { GifItem } from '../../interfaces/gif-item.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../../interfaces/giphy.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsProviderService {

  constructor() {
    this.loadTrendingGifs();
  }

  private http = inject(HttpClient);

  private gifList: GifItem[] = [
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      alt: ""
    },
    {
      class: "h-auto max-w-full rounded-lg",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
      alt: ""
    },
  ];

  public get gifItemsListGetter() : GifItem[] {
    return this.gifList;
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${ environment.apiUrl}/gifs/trending`, {
      params: {
        api_key: environment.apikey,
        limit: 20
      }
    }).subscribe( (res) => {
      console.log('http res:', res);

    })
  }

}
