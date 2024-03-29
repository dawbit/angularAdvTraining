import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsViewComponent } from './containers/playlists-view/playlists-view.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistListItemComponent } from './components/playlist-list-item/playlist-list-item.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';
import { SharedModule } from '../../shared/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


const routes: Routes = [
  {
    path: '', component: PlaylistsComponent,
    children: [
      {
        path: '', component: PlaylistsViewComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistsViewComponent,
    PlaylistListComponent,
    PlaylistListItemComponent,
    PlaylistDetailsComponent,
    PlaylistFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PlaylistsViewComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard',
        hideRequiredMarker: false
      }
    }
  ]
})
export class PlaylistsModule { }
