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
import {scale, verticalScale, moderateScale} from '../style-scaling'

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
            .then(({ data }) => {
                console.log(data)
                this.props.sendResultsToRedux(data.predictions)
            })
    }

    getPlaceDetail = async (place) => {
        let url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + place.place_id + '&fields=name,formatted_address,photo&key=' + API_KEY
        let details = await axios.get(url).then(res => res.data.result)
        await this.props.sendPlaceDetailsToRedux(details)
        this.props.navigation.navigate('Place')
    }

    render() { 
        return ( 
            <View style={styles.container}>
                {/* Search Input Field */}
                <View style={styles.inputContainer}>
                    <Image source={require('../../assets/list_search.png')} style={styles.icon} />
                    <TextInput 
                        value={this.state.input} 
                        onChangeText={text => {
                            this.setState({ input: text })
                            // Make API call only when user enters 3 or more characters.
                            if (text.length > 2) {
                                this.getPlaces(API_KEY, text)
                            }
                        }} 
                        style={[styles.input, styles.font]}
                    />
                </View>

                {/* Results List */}
                <View style={styles.resultsContainer}>
                    {/* Used a map() function due to issues with re-rendering data in FlatList. */}
                    {this.props.searchResults.map((item, index) => {
                        // Separate place name from location details for better formatting
                        let indexOfFirstComma = item.description.search(',')
                        let placeName = item.description.substring(0, indexOfFirstComma)
                        let placeDetails = item.description.substring(indexOfFirstComma + 2)
                        return (
                            <TouchableOpacity onPress={() => this.getPlaceDetail(item)} key={index} style={styles.item}>
                                <Text style={styles.font}> {placeName} </Text>
                                <Text style={{ fontSize: scale(11)}}> {placeDetails} </Text>
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
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: moderateScale(320),
        height: verticalScale(35),
        backgroundColor: '#eaecef',
        borderRadius: 6,
    },
    input: {
      flex: 1 
    },
    icon: {
        alignSelf: 'center',
        marginLeft: scale(10),
        marginRight: scale(10)
    },
    resultsContainer: {
        width: moderateScale(300)
    },
    item: {
        paddingBottom: scale(12),
        paddingTop: scale(12),
        borderBottomWidth: 1,
        borderColor: '#eaecef'
    },
    font: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 13
    }
})