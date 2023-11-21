import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useReview= () => {
  const [mutate, results] = useMutation(CREATE_REVIEW)

  const review = async ({ repositoryOwner, repositoryName, rating, reviewText }) => {
    const { data } = await mutate({ variables: { review:{ ownerName: repositoryOwner, repositoryName, rating: Number(rating), text: reviewText }}})
    return data
  }
  
  return [review, results]
}

export default useReview