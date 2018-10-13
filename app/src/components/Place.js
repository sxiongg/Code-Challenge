import React, { Component } from 'react'
import { 
    View, 
    Image,
    Dimensions,
    Text,
    StyleSheet,
    AsyncStorage 
} from 'react-native'
import Bookmark from './Bookmark'
import { connect } from 'react-redux'
import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'
import {scale, verticalScale, moderateScale} from '../style-scaling'
const {height, width} = Dimensions.get('window')

class Place extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            photo: '',
            bookmark: false
         }
    }

    componentDidMount () {
        // Get Place Photo when component mounts
        let url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=' + width + '&photoreference=' + this.props.place.photos[0].photo_reference + '&key=' + API_KEY
        axios.get(url)
            .then(res => {
                console.log(res.request.responseURL)
                this.setState({ photo: res.request.responseURL })
            })
        // Check local storage for bookmark; set bookmark state to true/false
        AsyncStorage.getItem(this.props.place.place_id)
            .then(value => {
                if (value !== null) {
                    this.setState({ bookmark: true })
                }
            })
    }

    setBookmark (place) {
        let key = place.place_id
        let value = JSON.stringify({...place, ...this.state.photo})
        // Set place in local storage
        AsyncStorage.setItem(key, value).then(res => console.log(res))
        // Change bookmarked state to true which changes bookmark component
        this.setState({ bookmark: true })
    }

    removeBookmark (place) {
        let key = place.place_id
        // Remove place from local storage
        AsyncStorage.removeItem(key).then(res => console.log(res))
        // Change bookmarked state to false which changes bookmark component
        this.setState({ bookmark: false })
    }

    render() { 
        // Destructuring of props
        let { formatted_address, name } = this.props.place

        // Remove ', USA' from end of address
        let lastIndex = formatted_address.length - 1
        let address = formatted_address.substring(0, lastIndex - 4)

        return ( 
            <View>
                <Image source={{uri: this.state.photo}} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}> { name.substring() } </Text>
                    <Text style={styles.address}> {address} </Text>
                    <Bookmark 
                        bookmark={this.state.bookmark}
                        removeBookmark={() => this.removeBookmark(this.props.place)}
                        setBookmark={() => this.setBookmark(this.props.place)}
                    />
                </View>
            </View>
         )
    }
}
 
const mapStateToProps = state => {
    return {
        place: state.placeDetails
    }
}

export default connect(mapStateToProps)(Place)

const styles = StyleSheet.create({ 
    image: {
        width: width,
        height: height / 2,
        resizeMode: 'cover'
    },
    detailsContainer: {
        backgroundColor: '#FFF',
        height: height * 0.7,
        alignItems: 'center'
    },
    name: {
        fontSize: moderateScale(20),
        fontFamily: 'Helvetica Neue',
        marginTop: scale(13)
    },
    address: {
        fontSize: moderateScale(12),
        fontFamily: 'HelveticaNeue-Light',
        marginTop: scale(5)
    }
})