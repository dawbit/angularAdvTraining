
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, componentWrapperDecorator } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { PlaylistDetailsComponent } from '../../features/playlists/components/playlist-details/playlist-details.component';
import { PlaylistsViewComponent } from '../../features/playlists/containers/playlists-view/playlists-view.component';
import { PlaylistsModule } from '../../features/playlists/playlists.module';
import { SharedModule } from '../../shared/shared.module';

import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Playlists/Details',
    component: PlaylistDetailsComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                PlaylistDetailsComponent
            ],
            imports: [
                SharedModule,
                // NoopAnimationsModule
            ]
        })
    ],
    argTypes: {
        playlist: {
            // options: ['primary', 'secondary'],
            control: { type: 'object' }
        },
        edit: { action: 'edit' }
    }
} as Meta;

const Template: Story<PlaylistDetailsComponent> = (args) => ({
    props: args,
    // template:'<wasko-playlist-details [playlist]="playlist" (edit)="edit($event)"></wasko-playlist-details>'
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    // edit: action('Edit') as any,
    playlist: {
        id: '123',
        name: 'Playlist Public',
        public: true,
        type: 'playlist',
        description: 'Best public playlist'
    }
};
