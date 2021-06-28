import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from '../../../../core/model/Playlist';

@Component({
  selector: 'wasko-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input() playlist: Playlist = {
    id: '123',
    name: 'Playlist 123',
    public: false,
    type: 'playlist',
    description: 'Best playlist'
  }

  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


  }

}
