import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, pluck } from 'rxjs/operators';

export interface SearchFormEvent {
  query: string,
  type: string
}

@Component({
  selector: 'wasko-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input()
  public set query(value: string | null) {
    (this.form.get('query') as FormControl)?.setValue(value || '', {
      emitEvent: false
    })
  }

  form = new FormGroup({
    'query': new FormControl('batman'),
    'type': new FormControl('album'),
  })

  @Output() search = new EventEmitter<SearchFormEvent>();

  queryField = this.form.get('query') as FormControl

  constructor() { }

  ngOnInit(): void {
    // this.form.removeControl('query')
    // this.form.valueChanges.subscribe(console.log)

    this.form.valueChanges.pipe(
      // pluck('query'),
      debounceTime(400)
    )
    // .subscribe(console.log   )
      .subscribe(this.search) // chain subjects

    // .subscribe({
    //   next: this.search.next,
    //   error: this.search.error,
    //   complete: this.search.complete,
    // })
  }

  submit(event: unknown) {
    this.search.emit(this.form.value)
  }

}
