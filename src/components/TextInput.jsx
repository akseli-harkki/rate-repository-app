import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: '#ADAAAC',
    borderWidth: 1,
    borderRadius: 5
  },
  inputError: {
    borderColor: theme.colors.error,
  }
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    styles.input,
    error && styles.inputError
  ]

  return <NativeTextInput style={textInputStyle} placeholderTextColor={'#ADAAAC'} {...props} />
}

export default TextInput