import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { AlbumView } from '../model/Search';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from '../tokens';
// import { MusicSearchModule } from '../../features/music-search/music-search.module';

@Injectable({
  // providedIn: MusicSearchModule
  // providedIn: 'platform' // Microfrontends / multiple angulars 
  // providedIn: 'any' // depends
  providedIn: 'root' // app.module
})
export class MusicSearchService {

  results: AlbumView[] = []

  constructor(
    private http: HttpClient,
    @Inject(API_URL_TOKEN) private api_url: string,
    @Optional() @Inject(INITIAL_RESULTS_TOKEN) initial: AlbumView[] | null
  ) {
    this.results = initial || []
  }

  getResults() {

    const obs = this.http.get(`${this.api_url}/albums`, {})

    obs.subscribe({
      next: console.log,
      error: console.error,
      complete: () => console.log('complete'),
    })

    console.log(this.results);

    return this.results
  }
}
