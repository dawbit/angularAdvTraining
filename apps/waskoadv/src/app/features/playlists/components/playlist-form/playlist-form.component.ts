import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';

@Component({
  selector: 'wasko-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } }
  ]
})
export class PlaylistFormComponent implements OnInit {

  @Input() playlist: Playlist = {
    id: '123',
    name: 'Playlist 123',
    public: false,
    type: 'playlist',
    description: 'Best playlist'
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {
    // cdr.detach()
  }

  alert() {
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError: 
    // Expression has changed after it was checked.
    // Previous value: 'Playlist 123'. 
    // Current value: 'changed while rendering!'.. 
    // Find more at https://angular.io/errors/NG0100
    // this.playlist.name = 'changed while rendering!'
    console.log('Check - detect changes');
  }


  ngOnInit(): void {
    // this.cdr.detectChanges()
  }

}
