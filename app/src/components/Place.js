import React, { Component } from 'react'
import { 
    View, 
    Image,
    ImageBackground,
    Dimensions,
    Text,
    StyleSheet 
} from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'
import {scale, verticalScale, moderateScale} from '../style-scaling'
const {height, width} = Dimensions.get('window')

class Place extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            photo: ''
         }
    }

    componentDidMount () {
        let url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=' + width + '&photoreference=' + this.props.place.photos[0].photo_reference + '&key=' + API_KEY
        axios.get(url)
            .then(res => {
                console.log(res)
                this.setState({ photo: res.request.responseURL })
            })
    }

    render() { 
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
        marginTop: scale(10)
    },
    address: {
        fontSize: moderateScale(12),
        fontFamily: 'HelveticaNeue-Light',
        marginTop: scale(5)
    }
})