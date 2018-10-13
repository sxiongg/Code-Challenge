import React, { Component } from 'react'
import { 
    View, 
    Image, 
    TextInput, 
    FlatList, 
    Text, 
    TouchableOpacity, 
    StyleSheet 
    } from 'react-native'
import { API_KEY } from 'react-native-dotenv'
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

    renderItem = (searchResult) => (
        <TouchableOpacity>
            <Text> {searchResult.description} </Text>
        </TouchableOpacity>
    )

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
                        onChangeText={text => {
                            this.setState({ input: text })
                            // Make API call only when user enters 3 or more characters.
                            if (text.length > 2) {
                                this.getPlaces(API_KEY, text)
                            }
                        }} 
                    />
                </View>
                {/* Results List */}
                <View>
                    {/* Used a map() function due to issues with re-rendering data in FlatList. */}
                    {this.props.searchResults.map((item, index) => {
                        return (
                            <TouchableOpacity key='index'>
                                <Text> {item.description} </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
         )
    }
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendResToRedux: res => dispatch(setSearchResults(res))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row'
    }
})