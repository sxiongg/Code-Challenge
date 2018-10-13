import React, { Component } from 'react'
import { 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Text 
} from 'react-native'
import {scale, verticalScale, moderateScale} from '../style-scaling'

class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                {/* Bookmarks List */}
                <View><Text>dfdgfdg</Text></View>

                {/* Button that navigates to Search screen */}
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Search')}>
                        <Text style={{...styles.font, color: '#FFF'}}> Add New Place </Text>
                    </TouchableOpacity>
            </View>
         )
    }
}

export default Bookmarks


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: moderateScale(300),
        height: verticalScale(45),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0404CE',
        borderRadius: 5,
        marginBottom: scale(5)
    },
    font: {
        fontFamily: 'HelveticaNeue-Light'
    }
})