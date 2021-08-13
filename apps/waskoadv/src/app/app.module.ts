import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { RouterModule, Routes } from '@angular/router';
import { PlaylistsModule } from './features/playlists/playlists.module';
import { FixturesModule } from './core/fixtures/fixtures.module';
import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: '', redirectTo: '/music-search', pathMatch: 'full' },
  { path: 'playlists', loadChildren: () => import('./features/playlists/playlists.module').then(m => m.PlaylistsModule) },
  { path: 'experiments', loadChildren: () => import('./features/experiments/experiments.module').then(m => m.ExperimentsModule) },
  { path: 'music-search', loadChildren: () => import('./features/music-search/music-search.module').then(m => m.MusicSearchModule) },
  { path: '**', redirectTo: '/playlists', pathMatch: 'full' },

  // { path: '', component: HomeComponent },
  // { path: 'path', component: FeatureComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    // Treeshakeable
    // environment.production ? [] : [FixturesModule]
  ],
  providers: [
    // {
    //   provide: 'API_URL',
    //   useValue: 'https://api.spotify.com/v1/'
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
