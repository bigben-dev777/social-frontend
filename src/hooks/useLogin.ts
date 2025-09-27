import { useSelector } from '@/store/index';

export default function useLogin() {
  const login = useSelector(store => store.auth.isLoggedIn);

  return login;
}
