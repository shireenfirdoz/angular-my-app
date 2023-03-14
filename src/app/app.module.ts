import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {MediaItemComponent} from "./media-item.component";
import {FavoriteDirectives} from './favorite.directive'
import {CategoryListPipe} from './catergory-list.pipe'
import {MediaItemListComponent} from "./media-item-list.component";

@NgModule({
imports:[BrowserModule],
  declarations:[AppComponent,MediaItemComponent,FavoriteDirectives,
  CategoryListPipe,MediaItemListComponent],
  bootstrap:[AppComponent]
})
export class AppModule{}

