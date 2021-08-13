import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ErrorHandler } from '@angular/core';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicSearchService } from 'apps/waskoadv/src/app/core/api/music-search.service';
import { Album, AlbumView, isSpotifyError, SpotifyError } from 'apps/waskoadv/src/app/core/model/Search';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from 'apps/waskoadv/src/app/core/tokens';
import { environment } from 'apps/waskoadv/src/environments/environment';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { take, takeUntil, takeWhile } from 'rxjs/operators';
import { SearchFormEvent } from '../../components/search-form/search-form.component';


@Component({
  selector: 'wasko-music-search-view',
  templateUrl: './music-search-view.component.html',
  styleUrls: ['./music-search-view.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  // providers:[]
})
export class MusicSearchViewComponent implements OnInit {

  results: AlbumView[] = []
  message = ''
  query = '';

  sub = new Subject()

  constructor(
    private service: MusicSearchService) { }

  ngOnInit(): void {
    this.service.resultsChange.pipe(
      // take(1)
      // takeWhile(fn)
      takeUntil(this.sub)
    ).subscribe({
      next: results => this.results = results,
    })

    this.service.queryChange.pipe(
      takeUntil(this.sub)
    ).subscribe({
      next: query => this.query = query,
    })

  }

  searchAlbums(event: SearchFormEvent) {
    this.service.searchAlbums(event.query)
  }

  ngOnDestroy(): void {
    this.sub.next()
  }
}
