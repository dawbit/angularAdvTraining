import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ErrorHandler } from '@angular/core';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MusicSearchService } from 'apps/waskoadv/src/app/core/api/music-search.service';
import { Album, AlbumView, isSpotifyError, SpotifyError } from 'apps/waskoadv/src/app/core/model/Search';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from 'apps/waskoadv/src/app/core/tokens';
import { environment } from 'apps/waskoadv/src/environments/environment';
import { BehaviorSubject, ConnectableObservable, Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { filter, map, multicast, publish, publishReplay, refCount, share, shareReplay, switchMap, take, takeUntil, takeWhile, tap } from 'rxjs/operators';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MusicSearchService) { }

  ngOnInit(): void {
    // const q = this.route.snapshot.queryParamMap.get('q');
    // q && this.service.searchAlbums(q)

    this.route.queryParamMap.pipe(
      map(q => q.get('q')),
      filter((q): q is string => q != ''),
      // switchMap(q => this.service.fetchResults(q)), share() // + asyncPipe
    )
      .subscribe(q => this.service.searchAlbums(q))
  }

  searchAlbums(event: SearchFormEvent) {
    // this.router.navigate(['/music-search'], {

    this.router.navigate([], {
      queryParams: { q: event.query, type: event.type },
      relativeTo: this.route
    })
  }

}
