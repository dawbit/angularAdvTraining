// Button.stories.ts
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  moduleMetadata,
  Story,
  componentWrapperDecorator,
} from '@storybook/angular';

import { Meta } from '@storybook/angular/types-6-0';
import { NavbarComponent } from '../shared/containers/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
``;

export default {
  title: 'Components/NavbarComponent',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        CommonModule,
        LayoutModule,
        MatSidenavModule,
        NoopAnimationsModule,
      ],
    }),
  ],
} as Meta;

export const Primary = () => ({
  template: /* html */ `<wasko-navbar>
        test
    </wasko-navbar>`,
  props: {
    // label: 'Button',
  },
});

export const WithMenu = () => ({
  template: /* html */ `<wasko-navbar>
        <ng-container ngProjectAs="menu"> menu here</ng-container>
        content here
    </wasko-navbar>`,
  props: {
    // label: 'Button',
  },
});
