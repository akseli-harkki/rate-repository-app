import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    background: '#423140',
    error: '#db2b2b',
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
};

export default theme;