import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { ErrorHandler, Inject, Injectable, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, from, merge, Subject } from 'rxjs';
import { NEVER } from 'rxjs';
import { AsyncSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { throwError } from 'rxjs';
import { EMPTY } from 'rxjs';
import { Observable, ObservableInput } from 'rxjs';
import { catchError, concatAll, distinctUntilChanged, exhaust, filter, map, mergeAll, pluck, switchAll, switchMap, tap } from 'rxjs/operators';
import { Album, AlbumsSearchResponse, AlbumView, isSearchResponse, isSpotifyError, SearchResponse, validateAlbumsSearchResponse, validateSearchResponse } from '../model/Search';
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

  // Single Central Atomic App State
  // private state = new BehaviorSubject({
  //   query: '',
  //   results: [],
  //     playlistModule:{
  //         items: {}
  //     }
  // })

  // Emit only if new Immutable object key changed
  // queryChange = this.state.pipe(map(state => state.query), distinctUntilChanged())
  // resultsChange = this.state.pipe(map(state => state.results), distinctUntilChanged())

    // Immutable state
    // this.state.next({
    //   ...this.state.getValue(),
    //   query: query
    // })

    // this.actions.pipe( 
    //   scan((state, action)=>{

    //       switch(action.type){
    //          case  'search':
    //             this.state.next({
    //                 ...state,
    //                 query: acion.query
    //               })
    //       }
    //   },this.state.getValue())
    // )

  protected query = new ReplaySubject<string>(3)
  protected results = new BehaviorSubject<AlbumView[]>([])

  queryChange = this.query.asObservable()
  resultsChange = this.results.asObservable()

  constructor(
    private http: HttpClient,

    @Inject(API_URL_TOKEN) private api_url: string,
    @Optional() @Inject(INITIAL_RESULTS_TOKEN) private initial: AlbumView[] | null
  ) {
    this.results.next(this.initial || [])

      ; (window as any).subject = this.query

    this.query.pipe(
      switchMap(query => this.fetchResults(query)),
    ).subscribe({
      next: results => this.results.next(results),
      // error: (error: unknown) => { },
    })
  }

  searchAlbums(query: string): void {
    this.query.next(query)

  }

  fetchResults(query: string) {
    return this.http.get<unknown>(`${this.api_url}/search`, {
      params: {
        query: query,
        type: 'album'
      },
    }).pipe(
      map(res => {
        validateAlbumsSearchResponse(res);
        return res;
      }),
      map(res => res.albums.items)
    );
  }
}
