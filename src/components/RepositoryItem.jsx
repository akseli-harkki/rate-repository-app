import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'

const headerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  avatarContainer: {
    flexGrow: 0,
    padding: 5
  },
  descriptionContainer: {
    flexGrow: 1,
    padding: 5,
    alignItems: 'flex-start',
    flexShrink: 1,
  },
  language: {
    justifyContent: 'center',
    flexGrow: 1,
    color: 'white',
    margin: 5,
    padding: 3,
    backgroundColor: '#7979cf',
    borderRadius: 7,
  }
});


const Header = ({item}) => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.avatarContainer}>
        <Image
          style={headerStyles.avatar}
          source={{uri: item.ownerAvatarUrl}}
        /> 
      </View>
      <View style={headerStyles.descriptionContainer}>
        <Text fontSize='subheading' fontWeight='bold'>{item.fullName}</Text>
        <Text>{item.description}</Text>        
        <Text style={headerStyles.language}>{item.language}</Text>       
      </View>     
    </View>       
  )
}

const footerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  item: {
    flexGrow: 0,
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  
})
const Footer = ({item}) => {
  return (
    <View style={footerStyles.container}>
      <View style={footerStyles.item}>
        <Text fontWeight='bold'>
          {(item.stargazersCount / 1000).toFixed(1)}k
        </Text>
        <Text color='textSecondary'>Stars</Text>
      </View>
      <View style={footerStyles.item}>
        <Text fontWeight='bold'>
          {(item.forksCount / 1000).toFixed(1)}k
        </Text>
        <Text color='textSecondary'>Forks</Text>
      </View>
      <View style={footerStyles.item}>
        <Text fontWeight='bold'>
          {item.reviewCount}
        </Text>
        <Text color='textSecondary'>Reviews</Text>
      </View>
      <View style={footerStyles.item}>
        <Text fontWeight='bold'>
          {item.ratingAverage}
        </Text>
        <Text color='textSecondary'>Rating</Text>
      </View>
    </View>
  )
}

const repositoryStyles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
  }
})

const RepositoryItem = ({item}) => {
  return (
    <View style={repositoryStyles.container}>
      <Header item={item} />
      <Footer item={item} />
    </View>
  )
}
export default RepositoryItem