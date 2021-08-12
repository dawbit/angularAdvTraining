import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicSearchService } from 'apps/waskoadv/src/app/core/api/music-search.service';
import { Album, AlbumView } from 'apps/waskoadv/src/app/core/model/Search';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from 'apps/waskoadv/src/app/core/tokens';
import { environment } from 'apps/waskoadv/src/environments/environment';
import { Subscription } from 'rxjs';
import { SearchFormEvent } from '../../components/search-form/search-form.component';


@Component({
  selector: 'wasko-music-search-view',
  templateUrl: './music-search-view.component.html',
  styleUrls: ['./music-search-view.component.scss'],
  // providers:[]
})
export class MusicSearchViewComponent implements OnInit {

  results: AlbumView[] = []
  message = ''

  constructor(
    private _snackBar: MatSnackBar,
    private service: MusicSearchService
  ) {

  }

  showMessage(message: string, action: string = '') {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }


  ngOnInit(): void { }

  searchAlbums(event: SearchFormEvent) {

    this.service.getResults(event.query).subscribe({
      next: results => {
        this.results = results.albums.items
      },
      // next: console.log,
      error: error => {

        // this.message = error.message
        this.showMessage(error.error.error.message, 'Dismiss')
      },
      complete: () => console.log('complete'),
    })
  }

}
