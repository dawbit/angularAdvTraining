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
  @Output() save = new EventEmitter<Playlist>();

  submit() {
    this.save.emit(this.playlist)
  }

  constructor(private cdr: ChangeDetectorRef) {
  }


  ngOnInit(): void {
  }

}
