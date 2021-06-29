import { Component, OnInit } from '@angular/core';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';

@Component({
  selector: 'wasko-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  mode: 'details' | 'edit' = 'details'

  playlists: Playlist[] = [{
    id: '123',
    name: 'Playlist 123',
    public: false,
    type: 'playlist',
    description: 'Best playlist'
  }, {
    id: '234',
    name: 'Playlist 234',
    public: true,
    type: 'playlist',
    description: 'Best playlist'
  }, {
    id: '345',
    name: 'Playlist 345',
    public: false,
    type: 'playlist',
    description: 'Best playlist'
  }]

  selectedPlaylist?: Playlist

  selectPlaylist(playlist_id: Playlist['id']) {
    this.selectedPlaylist = this.playlists.find(p => p.id === playlist_id)
  }

  editMode() { this.mode = 'edit' }
  detailsMode() { this.mode = 'details' }

  savePlaylist(draft: Playlist) {
    console.log(draft);

  }

  constructor() { }

  addPlaylist() {
    // this.selectedPlaylist.name // Object is possibly 'undefined'

    // Function Guard
    if (!this.selectedPlaylist) { return }

    this.selectedPlaylist = {
      ...this.selectedPlaylist,
      name: Date.now().toString()
      // public: !this.selectedPlaylist.public
    }
  }

  ngOnInit(): void {
  }

}
