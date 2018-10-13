import React, { Component } from 'react'
import { 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Text 
} from 'react-native'

class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                {/* Button that navigates to Search screen */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                    <Text> Add New Place </Text>
                </TouchableOpacity>
            </View>
         )
    }
}

export default Bookmarks


const styles = StyleSheet.create({

})