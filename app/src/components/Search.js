import React, { Component } from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'
import Header from './Header'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }

    render() { 
        return ( 
            <View>
                <Header 
                    screen='Search' 
                    goBack={() => this.props.navigation.goBack()} 
                />
                <View style={styles.input}>
                    <Image source={require('../../assets/list_search.png')} />
                    <TextInput />
                </View>
            </View>
         )
    }
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row'
    }
})
export default Search