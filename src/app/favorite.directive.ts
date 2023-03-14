import {Directive, HostBinding, Input, HostListener} from '@angular/core';

@Directive({
  selector:'[mwFavorite]'
})
export class FavoriteDirectives{
  @HostBinding('class.is-favorite') isFavorite=true;
  @HostBinding('class.is-favorite-hovering') hovering=false;
  @HostListener('mouse enter') onMouseEnter(){
    this.hovering=true;
    }
   @HostListener('mouse leave') onMouseLeave(){
       this.hovering=false;
       }
  @Input() set mwFavorite(val){
    this.isFavorite=val;
  }
}
