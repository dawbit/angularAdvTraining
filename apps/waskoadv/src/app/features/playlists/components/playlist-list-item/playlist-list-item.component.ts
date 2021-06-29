import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';

@Component({
  selector: 'wasko-playlist-list-item',
  templateUrl: './playlist-list-item.component.html',
  styleUrls: ['./playlist-list-item.component.scss']
})
export class PlaylistListItemComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
