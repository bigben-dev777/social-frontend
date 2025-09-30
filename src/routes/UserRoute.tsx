import Explore from '@/pages/explore/Explore';
import Profile from '@/pages/profile/Profile';

const UserRoutes = [
  {
    path: '/explore',
    element: <Explore />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/profile/:userId',
    element: <Profile />
  }
];

export default UserRoutes;
