import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms';


import {AppComponent} from "./app.component";
import {MediaItemComponent} from "./media-item.component";
import {FavoriteDirectives} from './favorite.directive'
import {CategoryListPipe} from './catergory-list.pipe'
import {MediaItemListComponent} from "./media-item-list.component";
import { MediaItemFormComponent } from './media-item-form.component';


@NgModule({
imports:[BrowserModule,ReactiveFormsModule],
  declarations:[AppComponent,MediaItemComponent,FavoriteDirectives,
  CategoryListPipe,MediaItemListComponent,MediaItemFormComponent ],
  bootstrap:[AppComponent]
})
export class AppModule{}

