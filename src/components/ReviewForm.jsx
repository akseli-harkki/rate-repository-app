import { Pressable, StyleSheet, View } from 'react-native'
import FormikTextInput from './FormikTextInput'
import Text from './Text'
import { Formik } from 'formik'
import * as yup from 'yup'
import useReview from '../hooks/useReview'
import { useNavigate } from 'react-router-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    maxHeight: 330,
    padding: 10,
  } 
})

const initialValues = {
  repositoryOwner: '',
  repositoryName: '',
  rating: '',
  reviewText: ''
}

const validationSchema = yup.object().shape({
  repositoryOwner: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number('Rating must be an integer between 0 - 100')
    .lessThan(101, 'Rating must be an integer between 0 - 100')
    .moreThan(-1, 'Rating must be an integer between 0 - 100')
    .integer('Rating must be an integer between 0 - 100')
    .required('Rating is required'),
  review: yup
    .string()  
})

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='repositoryOwner' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating' />
      <FormikTextInput name='reviewText' placeholder='Review' />
      <Pressable onPress={onSubmit}>
        <Text style={theme.button}>Create a review</Text>
      </Pressable>
    </View>
  )
}

export const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const Review = () => {
  const [review] = useReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { repositoryOwner, repositoryName, rating, reviewText } = values

    try {
      const result = await review({ repositoryOwner, repositoryName, rating, reviewText })
      navigate(`/repositories/${result.createReview.repositoryId}`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ReviewContainer onSubmit={onSubmit} />
  )
}

export default Review