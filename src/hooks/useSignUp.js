import { useMutation, useApolloClient } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'

const useSignUp = () => {
  const apolloClient = useApolloClient()
  const [mutate, results] = useMutation(CREATE_USER)

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({ variables: { user: { username, password }}})
    apolloClient.resetStore()
    return data
  }
  
  return [signUp, results]
}

export default useSignUp