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
        return ( 
            <View>
                <Image source={{uri: this.state.photo}} style={styles.image} />
                <Text>alldkjgfdg</Text>
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
    }
})