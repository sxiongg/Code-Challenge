import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <StackNavigator />
    )
  }
}

export default App;
