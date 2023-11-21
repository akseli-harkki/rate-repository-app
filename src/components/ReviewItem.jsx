import theme from '../theme'
import { Pressable, StyleSheet, View, Alert } from 'react-native'
import Text from './Text'
import { parseISO, format } from 'date-fns'
import { useNavigate } from 'react-router-native'
import useDeleteReview from '../hooks/useDeleteReview'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white'
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.blue,
    borderWidth: 2,
    justifyContent: 'center',
  },
  rating: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.blue,
    textAlign: 'center'
  },
  contentContainer: {
    flexGrow: 1,
    padding: 5,
    alignItems: 'stretch',
    flexShrink: 1,
    rowGap: 10,
  },
  buttonsContainer: {
    flexGrow: 0,
    flexDirection: 'row',
    paddingTop: 5,
    flexShrink: 2,
    justifyContent: 'space-between'
  }
})

const ReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate()
  const [destroy] = useDeleteReview()

  const viewRepository = () => {
    navigate(`/repositories/${review.repository.id}`)
  }

  const destroyReview = async () => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review', [
      {
        text: 'CANCEL',
        style: 'cancel',
      },
      {
        text: 'DELETE', 
        onPress: async () => {
          await destroy({ id: review.id })
          await refetch()
        },
      },
    ])
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>      
      <View style={styles.contentContainer}>
        {review.user && (
          <Text fontWeight='bold'>{review.user.username}</Text>
        )}
        {review.repository && (
          <Text fontWeight='bold'>{review.repository.ownerName}/{review.repository.name}</Text>
        )}        
        <Text>{format(parseISO(review.createdAt), 'MM.dd.yyyy')}</Text>
        <Text>{review.text}</Text>
        {review.repository && (
          <View style={styles.buttonsContainer}>
            <Pressable onPress={viewRepository}>
              <Text style={theme.button}>View repository</Text>
            </Pressable>
            <Pressable onPress={destroyReview}>
              <Text style={[theme.button, {backgroundColor:'red'}]}>Delete review</Text>
            </Pressable>
          </View>
        )} 
      </View>
    </View>
  )
}

export default ReviewItem