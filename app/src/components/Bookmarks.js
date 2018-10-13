import React, { Component } from 'react'
import { 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Text,
    AsyncStorage 
} from 'react-native'
import {scale, verticalScale, moderateScale} from '../style-scaling'

class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            userBookmarks: []
         }
    }

    componentDidMount () {
        // Using AsyncStorage, when the Bookmarks screen mounts it will retrieve all stored keys, 
        // get the key values with MultiGet, and then parse the stringified data to JSON. 
        AsyncStorage.getAllKeys()
            .then(res => {
                AsyncStorage.multiGet(res)
                    .then(res => {
                        console.log(res)
                        let bookmarksArr = res.map(item => {
                            return JSON.parse(item[1])
                        })
                        this.setState({ userBookmarks: bookmarksArr })
                        console.log(this.state.userBookmarks)
                    })    
        })
    }

    render() { 
        return ( 
            <View style={styles.container}>
                {/* Bookmarks List */}
                <View></View>

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
        alignItems: 'center',
        backgroundColor: '#FFF'
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