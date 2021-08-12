import { NgForOf, NgForOfContext } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';

NgForOf
NgForOfContext
@Component({
  selector: 'wasko-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class PlaylistListComponent implements OnInit {

  // oldplaylists === newplaylists
  @Input() playlists: Playlist[] = []

  @Input() selected?: Playlist['id'];

  @Output() selectedChange = new EventEmitter<Playlist['id']>();
  @Output() remove = new EventEmitter<Playlist['id']>();

  select(playlist: Playlist) {
    // this.selected = playlist.id
    this.selectedChange.emit(playlist.id)
  }

  removeItem(id: Playlist['id']) {
    this.remove.emit(id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
