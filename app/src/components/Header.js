import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import BackButton from '../../assets/Button-Back.png'

const renderBackButton = ({screen, goBack}) => {
    // Function that conditionally renders back button if the screen is Search.
    if (screen === 'Search') {
        return (
            <TouchableOpacity onPress={() => goBack}>
                <Image source={BackButton} />
            </TouchableOpacity>
        )
    }
}

const Header = (props) => {
    // Header component showing screen title and back button.
    return (
        <View style={styles.headerRow}>
            {renderBackButton(props)}
            <Text> {props.screen} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        marginTop: 25
    }
})
export default Header