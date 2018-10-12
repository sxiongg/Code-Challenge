import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './Header'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Header screen='Search' />
            </View>
         )
    }
}
 
export default Search