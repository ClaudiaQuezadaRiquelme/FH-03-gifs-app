import { Injectable } from '@angular/core';
import { GifItem } from '../../interfaces/gif-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsProviderService {

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

}
