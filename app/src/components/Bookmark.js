import React from 'react';
import { 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    Dimensions 
} from 'react-native'
import {scale, verticalScale, moderateScale} from '../style-scaling'
const { width, height } = Dimensions.get('window')

export default Bookmark = (props) => (
    props.bookmark
    ?
    <TouchableOpacity onPress={props.removeBookmark} style={{...styles.bookmark, backgroundColor: '#29BF12'}}>
        <Text style={styles.font}> Bookmarked </Text>
    </TouchableOpacity>
    :
    <TouchableOpacity onPress={props.setBookmark} style={{...styles.bookmark, backgroundColor: '#0404CE'}}>
        <Text style={styles.font}> Bookmark </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    bookmark: {
        backgroundColor: '#29BF12',
        width: width * 0.5,
        height: moderateScale(35),
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(25)
    },
    font: {
        fontFamily: 'Helvetica Neue',
        color: '#FFF',
        fontSize: moderateScale(12)
    }
})