import { NgForOf, NgForOfContext } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
