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
import axios from 'axios'
import { connect } from 'react-redux' 
import { setSearchResults, setPlaceDetails } from '../../redux/actions';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            input: ''
         }
    }

    getPlaces = (apiKey, input) => {
        // Function that creates URL string for autocomplete request and sends response to Redux.
        let url = 'https://maps.googleapis.com/maps/api/place/autocomplete/' + 'json?' + 'input=' + input + '&key=' + apiKey
        axios.get(url)
            .then(res => {
                console.log(res.data)
                this.props.sendResultsToRedux(res.data.predictions)
            })
    }

    getPlaceDetail = place => {
        let url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + place.place_id + '&fields=name,formatted_address,photo&key=' + API_KEY
        axios.get(url)
            .then(res => {
                console.log(res.data.result)
                this.props.sendPlaceDetailsToRedux(res.data.result)
                this.props.navigation.navigate('Place')
            })
    }

    render() { 
        return ( 
            <View>
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
                            <TouchableOpacity 
                                onPress={() => this.getPlaceDetail(item)}
                                key={index}>
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
        sendResultsToRedux: res => dispatch(setSearchResults(res)),
        sendPlaceDetailsToRedux: res => dispatch(setPlaceDetails(res))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row'
    }
})