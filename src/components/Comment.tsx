import { IComment } from '@/types/post';
import {  Stack, Typography } from '@mui/material';
import UserAvatar from './UserAvatar';

function PostComment({ commentData }: { commentData: IComment }) {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        padding: '1rem .5rem 1rem 0rem'
      }}
    >
      <UserAvatar user={commentData.user} size='small' />
      <Stack
        sx={{
          paddingLeft: '1rem',
          width: '100%'
        }}
      >
        <Typography>{commentData.content}</Typography>
        <Typography textAlign='right' variant='caption'>
          {commentData.createdAt}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default PostComment;
