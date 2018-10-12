import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './redux/store'
import Search from './src/components/Search'
import Bookmarks from './src/components/Bookmarks'
import Place from './src/components/Place'

const StackNavigator = createStackNavigator(
  {
    Bookmarks: {
      screen: Bookmarks,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    },
    Place: {
      screen: Place,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Bookmarks',
  }
)

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider> 
  )
}

export default App;
