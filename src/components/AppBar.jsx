import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'
import { useQuery } from '@apollo/client'
import { CURRENT_USER } from '../graphql/queries'
import useSignOut from '../hooks/useSignOut'

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
})

const AppBar = () => {
  const user = useQuery(CURRENT_USER)
  const signOut = useSignOut()
  if(user.loading) {
    return null
  }

  if(user.data.me) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>          
          <Link to='/'>
            <Text style={styles.tab}>Repositories</Text>
          </Link>
          <Link to='/reviews'>
            <Text style={styles.tab}>My reviews</Text>
          </Link>
          <Link to='/createReview'>
            <Text style={styles.tab}>Create a Review</Text>
          </Link> 
          <Pressable onPress={() => signOut()}>
            <Text style={styles.tab}>{user.data.me.username} Sign Out</Text>
          </Pressable>                             
        </ScrollView>        
      </View>
    )
  }
  
  return (    
    <View style={styles.container}>
      <ScrollView horizontal>          
        <Link to='/'>
          <Text style={styles.tab}>Repositories</Text>
        </Link>
        <Link to='/signIn'>
          <Text style={styles.tab}>Sign in</Text>
        </Link>
        <Link to='/signUp'>
          <Text style={styles.tab}>Sign up</Text>
        </Link>               
      </ScrollView>        
    </View>
  ) 
}

export default AppBar