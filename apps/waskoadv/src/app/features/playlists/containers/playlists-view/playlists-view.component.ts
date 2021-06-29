import { Component, OnInit } from '@angular/core';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';
// import {sizes} from './some-config.ts'

@Component({
  selector: 'wasko-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {
  // sizes = sizes

  selectedPlaylist: Playlist = {
    id: '123',
    name: 'Playlist 123',
    public: false,
    type: 'playlist',
    description: 'Best playlist'
  }

  constructor() { }

  addPlaylist() {
    // Immutable Data Structures

    // Full Copy // Immutable !
    // this.selectedPlaylist = {
    //   id: '123',
    //   name: 'Playlist 123 changed',
    //   public: false,
    //   type: 'playlist',
    //   description: 'Best playlist'
    // }

    // No copy -- Mutable -> No chceck / render
    // this.selectedPlaylist.name = 'changed!'

    this.selectedPlaylist = {
      ...this.selectedPlaylist, // reuse reference
      name: 'changed' // copy on change
    }
  }

  ngOnInit(): void {
  }

}
