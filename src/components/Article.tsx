import { addComment, likePost, unlikePost } from '@/services';
import { Post } from '@/types/post';
import { ThumbUp } from '@mui/icons-material';
import { Button, Divider, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import PostComment from './Comment';
import UserAvatar from './UserAvatar';

function Article({ postData, handleToggleChanged }: { postData: Post; handleToggleChanged: () => void }) {
  const [content, setContent] = useState('');

  const handleLikePost = async () => {
    try {
      await likePost(postData._id);
      handleToggleChanged();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnlikePost = async () => {
    try {
      await unlikePost(postData._id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddComment = async () => {
    try {
      await addComment(postData._id, content);
      handleToggleChanged();
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        marginInline: '2rem',
        padding: '3rem 1rem 1rem 2rem',
        flexDirection: 'row',
        gap: '1rem',
        my: '2rem'
      }}
    >
      <UserAvatar user={postData.user} size='normal'/>
      <Stack sx={{ width: '100%' }}>
        <Typography
          variant='body1'
          sx={{
            marginBottom: '2rem'
          }}
        >
          {postData.content}
        </Typography>
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1
          }}
        >
          <IconButton
            color='secondary'
            onClick={() => {
              handleLikePost();
            }}
          >
            <ThumbUp />
          </IconButton>
          <Typography>Likes: {postData.likes.length}</Typography>
          <Stack flex={1} />
          <Button
            onClick={() => {
              handleAddComment();
            }}
          >
            Comment
          </Button>
        </Stack>
        <TextField
          id='outlined-multiline-static'
          multiline
          fullWidth
          placeholder='Default Value'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Divider
          sx={{
            mt: 3,
            backgroundColor: '#343434'
          }}
        />
        <Stack>
          {postData.comments.map(item => (
            <PostComment commentData={item} key={item._id} />
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Article;
