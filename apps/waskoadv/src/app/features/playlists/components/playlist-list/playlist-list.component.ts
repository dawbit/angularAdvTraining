import { NgForOf, NgForOfContext } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';

NgForOf
NgForOfContext
@Component({
  selector: 'wasko-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  @Input() playlists: Playlist[] = []

  @Input() selected?: Playlist['id'];

  @Output() selectedChange = new EventEmitter<Playlist['id']>();

  select(playlist:Playlist){
    // this.selected = playlist.id
    this.selectedChange.emit(playlist.id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
