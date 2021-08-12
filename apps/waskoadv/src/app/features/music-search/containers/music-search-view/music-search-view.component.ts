import { Component, Inject, OnInit, Optional } from '@angular/core';
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

  constructor(
    private service: MusicSearchService
  ) {

  }


  ngOnInit(): void { }

  searchAlbums(event: SearchFormEvent) {
    
    const obs = this.service.getResults(event.query)

    const sub: Subscription  = obs.subscribe({
      // next: results => this.results = results,
      next: console.log,
      error: console.error,
      complete: () => console.log('complete'),
    })

    sub.unsubscribe()

    obs.subscribe({
      // next: results => this.results = results,
      next: console.log,
      error: console.error,
      complete: () => console.log('complete'),
    })

    console.log(event.query);
  }

}
