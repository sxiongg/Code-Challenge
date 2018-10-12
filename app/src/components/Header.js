import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import BackButton from '../../assets/Button-Back.png'

const renderBackButton = (screen) => {
    let backButton = require('../../assets/Button-Back.png')
    screen === 'Search'
    ? 
    <Image source={backButton} />
    :
    null
}

const Header = (props) => {
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