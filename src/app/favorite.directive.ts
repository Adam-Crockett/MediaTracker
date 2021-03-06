import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  Host
} from '@angular/core';

@Directive({
  selector: '[mtFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set mtFavorite(value) {
    this.isFavorite = value;
  }
}
