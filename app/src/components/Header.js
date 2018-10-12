import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import BackButton from '../../assets/Button-Back.png'

const renderBackButton = (screen) => {
    // Function that conditionally renders back button.
    if (screen === 'Search') {
        return (
            <Image source={BackButton} />
        )
    }
}

const Header = (props) => {
    // Header component that shows screen title and back button.
    return (
        <View style={styles.headerRow}>
            {renderBackButton(props.screen)}
            <Text> {props.screen} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
    }
})
export default Header