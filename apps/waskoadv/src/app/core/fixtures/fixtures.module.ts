import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'apps/waskoadv/src/environments/environment';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { API_URL_TOKEN, INITIAL_RESULTS_TOKEN } from '../tokens';


import { setupWorker } from 'msw'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
worker.start()

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // {
    //   provide: INITIAL_RESULTS_TOKEN,
    //   useValue: mockAlbums
    // },
    {
      provide: API_URL_TOKEN,
      // useValue: environment.api_url
      useValue: location.origin
    },
    // Hierarchic provider - overridable on component level:
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard',
        hideRequiredMarker: false
      }
    }
  ]
})
export class FixturesModule { }
