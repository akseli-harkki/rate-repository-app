import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    padding: 4,
    textAlign: 'left',
  },
  tab: {
    color: 'white',
    padding: 10,
    margin: 5,
    fontWeight: 'bold'
  }
});

const onPressFunction = () => {
  console.log('pressed')
}

const AppBar = () => {
  return (
    
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to='/signIn'>
            <Text style={styles.tab}>Sign In</Text>
          </Link>
          <Link to='/'>
            <Text style={styles.tab}>Repositories</Text>
          </Link>
        </ScrollView>
        
      </View>
     ) 
};

export default AppBar;