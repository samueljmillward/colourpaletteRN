import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

const PalettePreview = ({ handlePress, colorPalette }) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text>{colorPalette.paletteName}</Text>
        </TouchableOpacity>
    )
}

export default PalettePreview;
