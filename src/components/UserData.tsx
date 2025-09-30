import { Button, Paper, Stack, styled, Typography } from '@mui/material';

import { ResponseExploreUser } from '@/types/user';
import { followUserWithId, unfollowUserWithId } from '@/services';
import { errorToast, successToast } from '@/util/toast';

const UserDataContainer = styled(Stack)({
  alignItems: 'center',
  padding: '1rem',
  gap: 8
});

export default function UserData({
  userData,
  handleBtnClick
}: {
  userData: ResponseExploreUser;
  handleBtnClick: () => void;
}) {
  const handleToggleFollowBtnClick = async () => {
    try {
      if (userData.isFollowing) {
        await unfollowUserWithId(userData._id);
        successToast('Success unfollow user');
        handleBtnClick();
      } else {
        await followUserWithId(userData._id);
        successToast('Success follow user');
        handleBtnClick();
      }
    } catch (error) {
      errorToast(`${error}`);
    }
  };

  return (
    <Paper elevation={4}>
      <UserDataContainer>
        <Typography variant='h4'>{userData.username}</Typography>
        <Typography variant='body1'>{userData.email}</Typography>
        <Typography variant='body1'>Followers: {userData.followers.length}</Typography>
        <Typography variant='body1'>Following: {userData.following.length}</Typography>
        <Button
          variant='contained'
          color={userData.isFollowing ? 'error' : 'primary'}
          onClick={() => handleToggleFollowBtnClick()}
        >
          {userData.isFollowing ? 'UnFollow' : 'Follow'}
        </Button>
      </UserDataContainer>
    </Paper>
  );
}
