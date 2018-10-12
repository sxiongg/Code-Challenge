import React, { Component } from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'
import Header from './Header'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            input: ''
         }
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
                    <TextInput value={this.state.input} onChangeText={(text) => this.setState({input: text})} />
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