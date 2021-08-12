import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  form = new FormGroup({
    'query': new FormControl('batman'),
    'type': new FormControl('album'),
  })
  
  @Output() search = new EventEmitter<SearchFormEvent>();

  queryField = this.form.get('query') as FormControl

  constructor() { }

  ngOnInit(): void {
    // this.form.removeControl('query')
  }

  submit(event: unknown) {
    this.search.emit(this.form.value)
  }

}
