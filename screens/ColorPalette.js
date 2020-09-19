import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native'

import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return (
        <FlatList
            keyExtractor={item => item.colorName}
            style={styles.container}
            data={route.params.colors}
            renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            )}
            ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 35,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ColorPalette;