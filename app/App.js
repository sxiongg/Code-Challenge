import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './redux/store'
import Search from './src/components/Search'
import Bookmarks from './src/components/Bookmarks'
import Place from './src/components/Place'
import BackButton from './src/components/Back-Button'

const StackNavigator = createStackNavigator(
  // Navigation for app with React Navigation
  {
    Bookmarks: {
      screen: Bookmarks,
      navigationOptions: {
        headerTitle: 'Bookmarks',
        headerStyle: {
          backgroundColor: '#FFF',
          borderBottomWidth: 0
        },
        headerTitleStyle: {
          fontWeight: undefined,
          fontFamily: 'HelveticaNeue-Light'
        }
      }
    },
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Search',
          headerStyle: {
            backgroundColor: '#FFF',
            borderBottomWidth: 0
          },
          headerTitleStyle: {
            fontWeight: undefined,
            fontFamily: 'HelveticaNeue-Light'
          },
          headerLeft: 
          // Custom back button
            <BackButton goBack={() => navigation.navigate('Bookmarks')} />
        }  
      }
    },
    Place: {
      screen: Place,
      navigationOptions: ({ navigation }) => {
        return {
          headerTransparent: true,
          // headerStyle: {
          //   backgroundColor: 'transparent',
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   borderBottomWidth: 0
          // },
          headerLeft: 
          // Custom back button
            <BackButton goBack={() => navigation.goBack()} />

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
