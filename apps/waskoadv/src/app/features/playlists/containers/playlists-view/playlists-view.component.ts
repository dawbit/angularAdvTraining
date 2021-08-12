import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';

@Component({
  selector: 'wasko-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss'],
  // providers: [
  //     {
  //       provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  //       useValue: {
  //         appearance: 'fill', 
  //         hideRequiredMarker: false
  //       }
  //     }
  //   ]
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

  // selectPlaylist(playlist_id: string) {
  selectPlaylist(playlist_id: Playlist['id']) {
    this.selectedPlaylist = this.playlists.find(p => p.id === playlist_id)
  }

  editMode() { this.mode = 'edit' }
  detailsMode() { this.mode = 'details' }

  savePlaylist(draft: Playlist) {
    console.log(draft);

    // Mutable - OnPush won't detect change!!!
    // const index = this.playlists.findIndex(p => p.id === draft.id)
    // if(index !== -1)
    // this.playlists.splice(index, 1, draft)

    // Immutable - OnPush will detect change
    this.playlists = this.playlists.map(p => p.id === draft.id ? draft : p)
  }

  removePlaylist(id: Playlist['id']) {
    // const index = this.playlists.findIndex(p => p.id === id)
    // if(index !== -1)
    // this.playlists.splice(index, 1)
    // this.playlists = [...this.playlists]

    // const index = this.playlists.findIndex(p => p.id === id)
    // this.playlists = [...this.playlists.slice(0, index - 1), ...this.playlists.slice(index)]

    this.playlists = this.playlists.filter(p => p.id !== id)
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
