import { Component, OnInit } from '@angular/core';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';

@Component({
  selector: 'wasko-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  mode: 'details' | 'edit' = 'details'

  selectedPlaylist: Playlist = {
    id: '123',
    name: 'Playlist 123',
    public: false,
    type: 'playlist',
    description: 'Best playlist'
  }

  editMode(){ this.mode = 'edit'}
  detailsMode(){ this.mode = 'details'}

  constructor() { }

  addPlaylist() {
    this.selectedPlaylist = {
      ...this.selectedPlaylist, // reuse reference
      name: 'changed' // copy on change
    }
  }

  ngOnInit(): void {
  }

}
