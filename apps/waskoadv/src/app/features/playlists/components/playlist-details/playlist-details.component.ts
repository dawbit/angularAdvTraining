import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Playlist } from '../../../../core/model/Playlist';

@Component({
  selector: 'wasko-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsComponent implements OnInit {

  @Input('playlist') set playlistSetter(playlist: Playlist) {
    console.log(playlist);
    console.log('setter');
    
    this.playlist = playlist
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('onChanges');

    // changes['playlists'].previousValue
  }

  // @Input('playlist') 
  playlist: Playlist = {
    id: '123',
    name: 'Playlist 123',
    public: false,
    type: 'playlist',
    description: 'Best playlist'
  }

  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // console.log('init');
    

  }

}
