import { IUserLite } from '@/types';
import { stringAvatar } from '@/util';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserAvatar({ user, size }: { user: IUserLite; size: string }) {
  const sizeToPx = size === 'small' ? '32px' : size === 'normal' ? '40px' : '60px';

  return (
    <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none' }} reloadDocument>
      <Avatar {...stringAvatar(user.name)} sx={{ width: sizeToPx, height: sizeToPx }} />
    </Link>
  );
}
