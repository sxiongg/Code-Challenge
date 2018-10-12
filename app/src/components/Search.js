import React, { Component } from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux' 
import { setSearchResults } from '../../redux/actions';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            input: ''
         }
    }

    getPlaces = (APIKey, input) => {
        // Function that creates URL string for autocomplete request and sends response to Redux.
        let url = 'https://maps.googleapis.com/maps/api/place/autocomplete/' + 'json?' + 'input=' + input + '&key=' + APIKey
        axios.get(url)
            .then(res => {
                console.log(res)
                this.props.sendResToRedux(res.data.predictions)
            })
    }

    render() { 
        return ( 
            <View>
                <Header 
                    screen='Search' 
                    goBack={() => this.props.navigation.goBack()} 
                />
                {/* Search Input Field */}
                <View style={styles.input}>
                    <Image source={require('../../assets/list_search.png')} />
                    <TextInput 
                        value={this.state.input} 
                        onChangeText={(text) => {
                            this.setState({ input: text })
                            if (text.length > 3) {
                                
                                this.getPlaces('AIzaSyDrO7cL1HVJZEVWEzbhUWGUJ7aKhrge8xI', text)
                            }
                        }} 
                    />
                </View>
            </View>
         )
    }
}

const mapStateToProps = state => {
    return {
        // sendResToRedux: state.searchResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendResToRedux: res => dispatch(setSearchResults(res))
    }
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)