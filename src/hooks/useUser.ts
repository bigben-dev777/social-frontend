import { useSelector } from '@/store/index';

export default function useUser() {
  const user = useSelector(store => store.auth.user);

  return user;
}
