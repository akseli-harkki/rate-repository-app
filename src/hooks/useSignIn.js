import { useMutation, useApolloClient } from '@apollo/client'
import { AUTHENTICATE} from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [mutate, results] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { credentials: { username, password }}})
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
    return data
  }
  
  return [signIn, results]
}

export default useSignIn