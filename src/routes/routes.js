import { createBrowserRouter } from 'react-router-dom';
import { ChannelDetail, Feed, SearchFeed, Videodetail } from '../components';
import Root from '../root/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/video/:id',
        element: <Videodetail />,
      },
      {
        path: '/channel/:id',
        element: <ChannelDetail />,
      },
      {
        path: '/search/:searchTerm',
        element: <SearchFeed />,
      },
    ],
  },
]);

export default router;
