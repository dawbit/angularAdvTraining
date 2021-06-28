
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, componentWrapperDecorator } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { PlaylistsViewComponent } from '../../features/playlists/containers/playlists-view/playlists-view.component';
import { PlaylistsModule } from '../../features/playlists/playlists.module';
import { SharedModule } from '../../shared/shared.module';



export default {
    title: 'Components/Playlists/MainView',
    component: PlaylistsViewComponent,
    decorators: [
        moduleMetadata({
            imports: [
                PlaylistsModule,
                NoopAnimationsModule
            ]
        })
    ]
} as Meta;

export const Primary = () => ({
    props: {
        // label: 'Button', 
    },
});