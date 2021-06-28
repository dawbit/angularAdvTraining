import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';


const routes: Routes = [
  { path: '', component: PlaylistsComponent }
];

@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlaylistsModule { }
