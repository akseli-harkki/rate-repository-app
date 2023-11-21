import { useQuery } from '@apollo/client'
import { CURRENT_USER} from '../graphql/queries'

const useUserIncludingReviews = () => {
  const result = useQuery(CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {includeReviews: true},
  })

  return { user: result.loading ? undefined : result.data, loading: result.loading, refetch: result.refetch }
}

export default useUserIncludingReviews