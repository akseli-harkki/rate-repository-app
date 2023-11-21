import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview= () => {
  const [mutate, results] = useMutation(DELETE_REVIEW)

  const destroy = async ({ id }) => {
    await mutate({ variables: {deleteReviewId: id} })
    return null
  }
  
  return [destroy, results]
}

export default useDeleteReview