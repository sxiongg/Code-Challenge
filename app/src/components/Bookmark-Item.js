import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

const BookmarkItem = (props) => {
    return (
        <TouchableOpacity style={styles.row}>
            <Image source={props.uri} />
            <View>
                <Text> {props.place} </Text>
                <Text> {props.address} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row'
    }
})