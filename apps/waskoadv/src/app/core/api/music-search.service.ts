import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { NEVER } from 'rxjs';
import { throwError } from 'rxjs';
import { EMPTY } from 'rxjs';
import { Observable, ObservableInput } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { Album, AlbumsSearchResponse, AlbumView, isSpotifyError } from '../model/Search';
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



  getResults(query: string): Observable<Album[]> {

    return this.http.get<AlbumsSearchResponse>(`${this.api_url}/search`, {
      params: {
        query: query,
        type: 'album'
      },
    }).pipe(

      map(res => res.albums.items),
      // catchError((error, caught): ObservableInput<Album[]> => {

      // })
    )


  }
}
