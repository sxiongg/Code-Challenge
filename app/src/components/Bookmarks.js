import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Header from './Header'

class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Header screen='Bookmarks' />
                
                {/* Button that routes to Search screen */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                    <Text> Add New Place </Text>
                </TouchableOpacity>
            </View>
         )
    }
}

const styles = StyleSheet.create({

})
export default Bookmarks