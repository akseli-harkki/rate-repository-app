import { FlatList, StyleSheet, View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import theme from '../theme'
import {Picker} from '@react-native-picker/picker'
import { useState } from 'react'
import TextInput from './TextInput'
import { useDebounce } from 'use-debounce'

const styles = StyleSheet.create({
  container: {
    padding: 1,
    rowGap: 5,
    flex: 1,
  },
  picker: {
    padding: 1,
  },
  searchBar: {
    padding: 5,
    backgroundColor: 'white',
    margin: 10
  }
})

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const onChangeSearch = query => setSearchQuery(query)

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  )
}

export const RepositoryListContainer = ({ repositories, searchQuery, setSearchQuery, onEndReach }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({item}) => <RepositoryItem item={item} single={false} /> }
      ItemSeparatorComponent={() => <View style={theme.separator} />}
      ListHeaderComponent={<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debounceSearch] = useDebounce(searchQuery, 500)  
  const [order, setOrder] = useState('latest')
  const { repositories, fetchMore } = useRepositories({ order, searchKeyword: debounceSearch, first: 10 })

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={order}
        onValueChange={(itemValue) =>
          setOrder(itemValue)
        }>
        <Picker.Item label="Latest" value="latest" />
        <Picker.Item label="Highest rated" value="highest" />
        <Picker.Item label="Lowest rated" value="lowest" />
      </Picker>
      <RepositoryListContainer repositories={repositories} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onEndReach={onEndReach}/>
    </View>
  )
}

export default RepositoryList