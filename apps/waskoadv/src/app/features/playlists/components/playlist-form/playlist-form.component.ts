import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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

  @Input() playlist!: Playlist
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<Playlist>();

  @ViewChild('nameInputRef', {
    read: NgModel,
    static: false /* <- Is inside template */
  })
  nameInputRef?: NgModel

  @ViewChildren(NgModel) fields = new QueryList<NgModel>()

  // @ViewChild('formRef', { read: NgForm })
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

  // ngAfterContentChecked(): void {  }

  ngDoCheck(): void {
    console.log('Check'); // Works even with onPush
  }

  ngAfterViewInit() {
    // this.formRef // too soon = no form fields!
    // this.formRef?.form.valueChanges.subscribe(val => {
    //   console.log(val['name']);
    // })

    setTimeout(() => {
      // this.playlist.name = 'cahnged'
      this.formRef?.form.get('name')?.valueChanges.subscribe(val => {
        console.log(val);
      })
      // debugger
    })
    
  }


  ngOnInit(): void {
    // this.formRef // too soon = undefined
  }

}
