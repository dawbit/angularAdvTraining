import { rest } from 'msw'
import mockAlbums from './mockAlbums';


export const handlers = [
    // rest.post('/albums', (req, res, ctx) => {
    //     // Persist user's authentication in the session
    //     sessionStorage.setItem('is-authenticated', 'true');
    //     return res(
    //         // Respond with a 200 status code
    //         ctx.status(200)
    //     );
    // }),
    rest.get('/albums', (req, res, ctx) => {
        const query = new URLSearchParams(req.url.search).get('query') || ''
        // Check if the user is authenticated in this session
        // const isAuthenticated = sessionStorage.getItem('is-authenticated');
        // if (!isAuthenticated) {
        //     // If not authenticated, respond with a 403 error
        //     return res(
        //         ctx.status(403),
        //         ctx.json({
        //             errorMessage: 'Not authorized',
        //         })
        //     );
        // }
        // If authenticated, return a mocked user details
        return res(
            ctx.status(200),
            ctx.json(mockAlbums.filter(a => a.name.includes(query)))
        );
    }),
];
