import { FlatList, View } from 'react-native'
import ReviewItem from './ReviewItem'
import theme from '../theme'
import Text from './Text'
import useUserIncludingReviews from '../hooks/useUserIncludingReviews'

const UsersReviews = () => {
  const { user, refetch } = useUserIncludingReviews()

  const reviewNodes = user
    ? user.me.reviews.edges.map((edge) => edge.node)
    : []

  if(reviewNodes.length > 0) {
    return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <View style={theme.separator} />}
      />
    )
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>You have not reviewed any repositories yet</Text>
    </View>    
  )
}

export default UsersReviews