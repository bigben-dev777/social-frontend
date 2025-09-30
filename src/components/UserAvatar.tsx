import { Auth } from '@/types';
import { stringAvatar } from '@/util';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserAvatar({ user, size }: { user: Auth; size: string }) {
  const sizeToPx = size === 'small' ? '32px' : size === 'normal' ? '40px' : '60px';

  return (
    <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none' }} reloadDocument>
      <Avatar {...stringAvatar(user.username)} sx={{ width: sizeToPx, height: sizeToPx }} />
    </Link>
  );
}
