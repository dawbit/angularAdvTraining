import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MusicSearchService } from 'apps/waskoadv/src/app/core/api/music-search.service';
import { Album, AlbumView } from 'apps/waskoadv/src/app/core/model/Search';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from 'apps/waskoadv/src/app/core/tokens';
import { environment } from 'apps/waskoadv/src/environments/environment';
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
    
    this.results = this.service.getResults()
  }


  ngOnInit(): void { }

  searchAlbums(event: SearchFormEvent) {
    console.log(event);
  }

}
