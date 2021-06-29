import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { RouterModule, Routes } from '@angular/router';
import { PlaylistsModule } from './features/playlists/playlists.module';

export const routes: Routes = [
  { path: '', redirectTo: '/playlists', pathMatch: 'full' },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./features/playlists/playlists.module')
        .then(m => m.PlaylistsModule)
  },
  { path: '**', redirectTo: '/playlists', pathMatch: 'full' },

  // { path: '', component: HomeComponent },
  // { path: 'path', component: FeatureComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
