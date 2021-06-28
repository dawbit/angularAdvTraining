import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToPlaylistComponent } from './containers/add-to-playlist/add-to-playlist.component';



@NgModule({
  declarations: [
    AddToPlaylistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddToPlaylistComponent
  ]
})
export class PlaylistSharedModule { }
