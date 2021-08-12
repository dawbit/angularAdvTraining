import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsGroupComponent } from './components/tabs-group/tabs-group.component';
import { TabComponent } from './components/tab/tab.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TabsGroupComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    TabsGroupComponent,
    TabComponent
  ]
})
export class TabsModule { }
