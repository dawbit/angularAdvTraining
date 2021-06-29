import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Playlist } from '../../../../core/model/Playlist';

@Component({
  selector: 'wasko-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsComponent implements OnInit {

  // @Input() playlist?: Playlist 
  @Input() playlist!: Playlist

  @Output() edit = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (!this.playlist) { throw new Error('Missing playlist data') }

  }

}
