import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatCardModule
} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlaylistSharedModule } from '../features/playlists/shared/playlist-shared/playlist-shared.module';
import { ClockComponent } from './containers/clock/clock.component';
import { YesnoPipe } from './pipes/yesno.pipe';
import { CensorDirective } from './directives/censor.directive';
import { TabsModule } from './modules/tabs/tabs.module';
import { SelectableListOptionComponent } from './components/selectable-list-option/selectable-list-option.component';


@NgModule({
  declarations: [NavbarComponent, ClockComponent, YesnoPipe, CensorDirective, SelectableListOptionComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    PlaylistSharedModule,
    TabsModule,
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    PlaylistSharedModule,
    ClockComponent,
    YesnoPipe,
    CensorDirective,
    TabsModule,
    MatCardModule,
    SelectableListOptionComponent
  ]
})
export class SharedModule { }
