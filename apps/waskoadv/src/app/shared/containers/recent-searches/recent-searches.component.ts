import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { scan } from 'rxjs/operators';
import { MusicSearchService } from '../../../core/api/music-search.service';

@Component({
  selector: 'wasko-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentSearchesComponent implements OnInit {

  queries = this.service.queryChange.pipe(
    scan((queries, query) => {
      queries.push(query)
      queries = queries.slice(-3)
      return queries
    }, [] as string[])
  )

  constructor(
    private service: MusicSearchService
  ) { }

  search(query: string) {
    this.service.searchAlbums(query)
  }

  ngOnInit(): void {

  }

}
