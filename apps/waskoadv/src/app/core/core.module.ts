import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumView } from './model/Search';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from './tokens';
import { MusicSearchService } from './api/music-search.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: HttpClient, // replace  main service
    //   provide: HttpHandler, // replace one part
    //   useClass: MySpecialSuperExtendedOverridedHttpClient,
    // },
    // {
    //   provide: 'INITIAL_RESULTS',
    //   useValue: []
    // },
    {
      provide: API_URL_TOKEN,
      useValue: 'https://api.spotify.com/v1/'
    },
    // {
    //   provide: MusicSearchService,
    //   useFactory(api_url: string, initial: AlbumView[]) {
    //     return new MusicSearchService(api_url, initial)
    //   }, deps: [
    //     API_URL_TOKEN, INITIAL_RESULTS_TOKEN
    //   ]
    // },
    // {
    //   provide: MusicSearchService,
    //   useClass: MusicSearchService, 
    //   // deps: [API_URL_TOKEN, INITIAL_RESULTS_TOKEN] // taken from @Inject metadata
    // },
    // {
    //   provide: AbstractMusicSearchService,
    //   useExisting: SpotifyMusicSearchService, 
    // }
    // {
    //   provide: AbstractMusicSearchService,
    //   useClass: SpotifyMusicSearchService, 
    // },
    // {
    //   provide: MusicSearchService,
    //   useClass: MusicSearchService, 
    // },
    // { provide: A, useClass: A },
    // { provide: B, useClass: A }, // creates separate instance
    // or 
    // { provide: B, useExisting: A }, // reuses existing instance
    // MusicSearchService
  ]
})
export class CoreModule { }

// MusicProiver => SpotifyProiver
// PaymentProiver => CrediCardProvider

