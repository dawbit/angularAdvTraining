import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ErrorHandler } from '@angular/core';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicSearchService } from 'apps/waskoadv/src/app/core/api/music-search.service';
import { Album, AlbumView, isSpotifyError, SpotifyError } from 'apps/waskoadv/src/app/core/model/Search';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from 'apps/waskoadv/src/app/core/tokens';
import { environment } from 'apps/waskoadv/src/environments/environment';
import { Subscription } from 'rxjs';
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

  constructor(
    private service: MusicSearchService) { }

  ngOnInit(): void {
    this.service.resultsChange.subscribe({
      next: results => this.results = results,
    })
  }

  searchAlbums(event: SearchFormEvent) {
    // CQS - Command Query separation
    this.service.searchAlbums(event.query) // 1 - * - multicast

    // this.service.searchAlbums(event.query).subscribe(...) // 1-1 - Unicast
  }

}
