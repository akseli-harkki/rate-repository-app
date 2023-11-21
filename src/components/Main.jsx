import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import SingleRepositoryItem from './SingleRepository'
import Review from './ReviewForm'
import SignUp from './SignUp'
import UsersReviews from './UsersReviews'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#D9D5D8'
  },
})

const Main = () => {
  return (    
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/repositories/:id' element={<SingleRepositoryItem />} />
        <Route path='/createReview' element={<Review />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/reviews' element={<UsersReviews />} />
      </Routes>      
    </View>
  )
}

export default Main