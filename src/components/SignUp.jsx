import { Pressable, StyleSheet, View } from 'react-native'
import FormikTextInput from './FormikTextInput'
import Text from './Text'
import { Formik } from 'formik'
import * as yup from 'yup'
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    maxHeight: 200,
    padding: 10,
  } 
})

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters long')
    .max(30, 'Username can´t be longer than 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long')
    .max(30, 'Password can´t be longer than 30 characters'),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
})

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true}/>
      <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation' secureTextEntry={true}/>
      <Pressable testID='signInButton' onPress={onSubmit}>
        <Text style={theme.button}>Sign Up</Text>
      </Pressable>
    </View>
  )
}

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {
  const [signUp] = useSignUp()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signUp({ username, password })
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SignUpContainer onSubmit={onSubmit} />
  )
}

export default SignUp