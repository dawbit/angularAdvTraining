import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MusicSearchComponent } from './music-search.component';
import { MusicSearchViewComponent } from './containers/music-search-view/music-search-view.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';


const routes: Routes = [
  {
    path: '',
    component: MusicSearchComponent,
    children: [
      { path: '', component: MusicSearchViewComponent }
    ]
  }
];

@NgModule({
  declarations: [
    MusicSearchComponent,
    MusicSearchViewComponent,
    SearchFormComponent,
    SearchResultsComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    
  ]
})
export class MusicSearchModule { }
