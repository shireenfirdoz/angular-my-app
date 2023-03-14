import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'media-item',
  templateUrl:'./media-item.component.html',
  styleUrls : ['./media-item.component.css']
})
export class MediaItemComponent{
  name="Redemption"
  @Input('mediaItem') mediaItem;
  @Output() delete = new EventEmitter();

  wasWatchedOn(){
    return true;
  }
  onDelete(){
    console.log("deleted s");
    this.delete.emit(this.mediaItem);
  }
}
