import useSWR from 'swr'
import { loginFetcher } from '../../functions/connection v2 beta'

/* export const loginConnection = (payload) => {
    const { data, error, isLoading } = useSWR('/api/user', loginFetcher)
    const loginState = false
    console.log(payload)
    return loginState
} */



/* export const useloginConnection = (payload) => {
  const { data, mutate, error } = useSWR("login_user", (payload) => loginFetcher(payload));

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return { loading, loggedOut, user : data, mutate };
} */