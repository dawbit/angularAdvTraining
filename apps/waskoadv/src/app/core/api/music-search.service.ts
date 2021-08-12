import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Album, AlbumsSearchResponse, AlbumView } from '../model/Search';
import { AuthService } from '../services/auth.service';
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
    private auth: AuthService,
    @Inject(API_URL_TOKEN) private api_url: string,
    @Optional() @Inject(INITIAL_RESULTS_TOKEN) initial: AlbumView[] | null
  ) {
    this.results = initial || []
  }

  getResults(query: string) {

    return this.http.get<AlbumsSearchResponse>(`${this.api_url}/search`, {
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      },
      params: {
        query: query,
        type: 'album'
      },
    })



  }
}
