import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ErrorHandler } from '@angular/core';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicSearchService } from 'apps/waskoadv/src/app/core/api/music-search.service';
import { Album, AlbumView, isSpotifyError, SpotifyError } from 'apps/waskoadv/src/app/core/model/Search';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from 'apps/waskoadv/src/app/core/tokens';
import { environment } from 'apps/waskoadv/src/environments/environment';
import { ConnectableObservable, Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { multicast, take, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { SearchFormEvent } from '../../components/search-form/search-form.component';


@Component({
  selector: 'wasko-music-search-view',
  templateUrl: './music-search-view.component.html',
  styleUrls: ['./music-search-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // providers:[]
})
export class MusicSearchViewComponent implements OnInit {
  // results = this.service.fetchResults('alice')
  // cache: any

  results = this.service.resultsChange
  query = this.service.queryChange

  constructor(private service: MusicSearchService) { }

  ngOnInit(): void { }

  searchAlbums(event: SearchFormEvent) {
    // this.service.searchAlbums(event.query)


    // Convert Unicast to Multicast
    this.results = this.service.fetchResults(event.query).pipe(
      multicast(new Subject())
    )

  }

  connect() {

    ; (this.results as ConnectableObservable<AlbumView[]>).connect()
  }

}
