import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import { FlatList, View } from 'react-native'
import ReviewItem from './ReviewItem'
import theme from '../theme'

const SingleRepositoryItem = () => {
  const id = useParams().id
  const { repository, fetchMore } = useRepository({ id, first: 10 })

  if(!repository) {
    return null
  }

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} single={true} />}
      ListHeaderComponentStyle={{ marginBottom: 10 }}
      ItemSeparatorComponent={() => <View style={theme.separator} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepositoryItem