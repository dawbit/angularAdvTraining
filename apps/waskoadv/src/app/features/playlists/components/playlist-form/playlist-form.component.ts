import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Playlist } from 'apps/waskoadv/src/app/core/model/Playlist';

@Component({
  selector: 'wasko-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   {
  //     provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  //     useValue: {
  //       appearance: 'standard', 
  //       hideRequiredMarker: false
  //     }
  //   }
  // ]
})
export class PlaylistFormComponent implements OnInit {

  @Input() playlist!: Playlist
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<Playlist>();

  @ViewChild(NgForm)
  formRef?: NgForm


  ngOnChanges(changes: SimpleChanges): void {
    
  }


  submit(form: NgForm) {
    const draft: Playlist = {
      ...this.playlist,
      ...form.value
    };
    this.save.emit(draft)
  }

  constructor(private cdr: ChangeDetectorRef) {
  }


  ngDoCheck(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.formRef
      // debugger
    })

  }


  ngOnInit(): void {
  }

}
