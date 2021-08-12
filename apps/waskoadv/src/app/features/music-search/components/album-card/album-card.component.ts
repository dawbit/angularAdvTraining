import { Component, Input, OnInit } from '@angular/core';
import { AlbumView } from 'apps/waskoadv/src/app/core/model/Search';

@Component({
  selector: 'wasko-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input()
  album!: AlbumView;

  constructor() {
  }
  
  ngOnInit(): void {
    if (!this.album) throw new Error('Missing input')
  }

}
