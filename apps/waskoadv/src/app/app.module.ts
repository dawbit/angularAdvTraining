import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [
  {
    path: 'playlists',
    loadChildren: () =>
      import('./features/playlists/playlists.module').then(
        (m) => m.PlaylistsModule
      ),
  },
  { path: '', redirectTo: '/playlists', pathMatch: 'full' },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./features/playlists/playlists.module').then(
        (m) => m.PlaylistsModule
      ),
  },
  { path: '**', redirectTo: '/playlists', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
