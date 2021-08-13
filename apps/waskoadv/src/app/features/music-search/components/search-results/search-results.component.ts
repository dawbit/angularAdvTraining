import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AlbumView } from 'apps/waskoadv/src/app/core/model/Search';

@Component({
  selector: 'wasko-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {

  @Input() results: AlbumView[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
