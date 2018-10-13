import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    FlatList,
    AsyncStorage
} from 'react-native'
import BookmarkItem from './Bookmark-Item'
import { scale, verticalScale, moderateScale } from '../style-scaling'

class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userBookmarks: []
        }
    }

    async componentDidMount() {
        // Using AsyncStorage, when the Bookmarks screen mounts it will retrieve all stored keys, 
        // get the key values with MultiGet, and then parse the stringified data to JSON. 
    }

    renderItem = ({ name, formatted_address, photo }) => (
        <BookmarkItem
            uri={photo}
            place={name}
            address={formatted_address}
        />
    )

    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={() => AsyncStorage.clear()}><Text>sjhjdkf</Text></TouchableOpacity> */}
                {/* Bookmarks List */}
                <FlatList
                    data={this.state.userBookmarks}
                    keyExtractor={(item, index) => item.place_id}
                    renderItem={this.renderItem}
                />

                {/* Button that navigates to Search screen */}
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Search')}>
                    <Text style={{ ...styles.font, color: '#FFF' }}> Add New Place </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const fetchAllItems = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        console.log(items)
        return items.map(item => JSON.parse(item[1]))
    } catch (error) {
        console.log(error, "Error getting local storage data.")
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