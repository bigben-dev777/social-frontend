import { useEffect, useState } from 'react';
import { Avatar, Box, Container, Divider, Stack, Typography } from '@mui/material';

import { stringAvatar } from '@/util';
import { getUserById, getUserPosts, getUserPostsByUserId, getUserProfile } from '@/services';
import { useNavigate, useParams } from 'react-router-dom';
import UserAvatar from '@/components/UserAvatar';
import { IPost, IProfile } from '@/types';

function Profile() {
  const [profileData, setProfileData] = useState<IProfile | undefined>(undefined);
  const [posts, setPosts] = useState<IPost[]>([]);
  const { userId } = useParams();
  const navigate = useNavigate();

  const loadProfile = async () => {
    try {
      const newProfileData = userId === undefined ? await getUserProfile() : await getUserById(userId);
      setProfileData(newProfileData);
    } catch (error) {
      navigate('/error');
    }
  };

  const loadUserPost = async () => {
    try {
      const newPosts = userId === undefined ? await getUserPosts() : await getUserPostsByUserId(userId);
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
      navigate('/error');
    }
  };

  useEffect(() => {
    loadProfile();
    loadUserPost();
  }, []);

  if (profileData === undefined) {
    return <>Non</>;
  } else {
    return (
      <Box>
        <Container>
          <Stack direction='row'>
            <Stack flex={1} sx={{}}>
              <Avatar
                {...stringAvatar(profileData.user.name)}
                sx={{
                  width: '300px',
                  height: '300px',
                  marginBlock: '2rem',
                  fontSize: '10rem'
                }}
              />
              <Typography variant='h4'>{profileData.user.name}</Typography>
              <Typography variant='body1' color='secondary'>
                {profileData.user.email}
              </Typography>
            </Stack>
            <Stack flex={2}>
              <Stack>
                <Typography
                  variant='h4'
                  sx={{
                    marginTop: '1rem',
                    paddingBlock: '1rem'
                  }}
                >
                  Followings
                </Typography>
                <Divider />
                <Stack
                  sx={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    gap: '1rem',
                    minHeight: '50px'
                  }}
                >
                  {profileData.following.map(user => (
                    <Stack
                      key={user._id}
                      sx={{
                        width: '100px',
                        alignItems: 'center',
                        paddingBlock: '2rem'
                      }}
                    >
                      <UserAvatar user={user} size='normal' />
                      <Typography variant='body2'>{user.name}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack>
                <Typography
                  variant='h4'
                  sx={{
                    paddingBlock: '1rem'
                  }}
                >
                  Followers
                </Typography>
                <Divider />
                <Stack
                  sx={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    gap: '1rem',
                    minHeight: '50px'
                  }}
                >
                  {profileData.followers.map(user => (
                    <Stack
                      key={user._id}
                      sx={{
                        width: '100px',
                        alignItems: 'center',
                        paddingBlock: '2rem'
                      }}
                    >
                      <UserAvatar user={user} size='normal' />
                      <Typography variant='body2'>{user.name}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack>
                <Typography
                  variant='h4'
                  sx={{
                    paddingBlock: '1rem'
                  }}
                >
                  Posts
                </Typography>
                <Divider sx={{ marginBottom: '20px' }} />
                {posts.map(post => (
                  <Stack key={post._id} mt='16px' ml='10px'>
                    <Typography>{post.content.slice(0, 50) + '...'}</Typography>
                    <Typography
                      variant='caption'
                      sx={{
                        textAlign: 'right'
                      }}
                    >
                      {post.createdAt}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  }
}

export default Profile;
