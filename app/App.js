import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { Image, TouchableOpacity } from 'react-native'
import BackButton from './assets/Button-Back.png'
import store from './redux/store'
import Search from './src/components/Search'
import Bookmarks from './src/components/Bookmarks'
import Place from './src/components/Place'

const StackNavigator = createStackNavigator(
  // Navigation for app with React Navigation
  {
    Bookmarks: {
      screen: Bookmarks,
      navigationOptions: {
        headerTitle: 'Bookmarks'
      }
    },
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Search',
          headerLeft: 
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={BackButton}/>
            </TouchableOpacity>
        }  
      }
    },
    Place: {
      screen: Place,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: 
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={BackButton}/>
            </TouchableOpacity>
        }  
      }
    }
  },
  {
    initialRouteName: 'Bookmarks',
  }
)

const App = () => {
  return (
    // Redux wrapper
    <Provider store={store}>
      <StackNavigator />
    </Provider> 
  )
}

export default App;
