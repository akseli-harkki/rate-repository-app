import { useQuery } from '@apollo/client'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ order, searchKeyword, first }) => {
  let variables = {
    searchKeyword,
    first
  }
  switch (order) {
  case 'latest':
    variables.orderBy = 'CREATED_AT' 
    break
  case 'highest':
    variables.orderBy = 'RATING_AVERAGE',
    variables.orderDirection = 'DESC'

    break
  case 'lowest':
    variables.orderBy = 'RATING_AVERAGE',
    variables.orderDirection = 'ASC'
    break
  }
  
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: variables,
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return { repositories: data?.repositories, loading, refetch: result.refetch, fetchMore: handleFetchMore }
}

export default useRepositories