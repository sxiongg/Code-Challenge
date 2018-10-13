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
const {height, width} = Dimensions.get('window')

class Place extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }

    render() { 
        return ( 
            <View>
                {/* <ImageBackground 
                    style={styles.image} 
                    source={{uri: 'data:' + this.props.place.photos[0].photo_reference}}>
                    <Text>alldkjgfdg</Text>
                </ImageBackground> */}
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
        height: height / 2
    }
})