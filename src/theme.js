import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    background: '#423140',
    error: '#db2b2b',
    blue: '#7979cf'
  },
  fontSizes: {
    body: 14,
    subheading: 20,
    heading: 1,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'System'
  })  ,
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#8181cd',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center'
  },
  separator: {
    height: 10
  }
}

export default theme