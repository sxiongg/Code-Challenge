import React from 'react';
import { TouchableOpacity, Image } from 'react-native'
import button from '../../assets/Button-Back.png'
import {scale, verticalScale, moderateScale} from '../style-scaling'

const BackButton = (props) => {
    return (
        <TouchableOpacity onPress={props.goBack} style={{ marginLeft: scale(22)}}>
            <Image source={button} />
        </TouchableOpacity>
    )
} 

export default BackButton