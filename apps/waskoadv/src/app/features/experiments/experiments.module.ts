import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentsComponent } from './experiments.component';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
  { path: '', component: ExperimentsComponent }
];

@NgModule({
  declarations: [
    ExperimentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ExperimentsModule { }
