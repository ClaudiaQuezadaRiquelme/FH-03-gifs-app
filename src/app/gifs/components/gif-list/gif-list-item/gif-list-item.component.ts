import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {
  class: InputSignal<string|undefined> = input<string|undefined>();
  src: InputSignal<string> = input.required<string>();
  alt: InputSignal<string|undefined> = input<string|undefined>();
}
