import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../../../core/api/music-search.service';

@Component({
  selector: 'wasko-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentSearchesComponent implements OnInit {

  queries: string[] = []

  constructor(
    private cdr: ChangeDetectorRef,
    private service: MusicSearchService
  ) {

  }
  
  search(query: string){
    this.service.searchAlbums(query)
  }
  
  ngOnInit(): void {
    // this.queries = this.service.queries
    // this.queries = this.queries.slice(-3)

    this.service.queryChange.subscribe(query => {
      this.queries.push(query)
      this.queries = this.queries.slice(-3)
      this.cdr.markForCheck()
    })
  }

}
