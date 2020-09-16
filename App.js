import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ColorBox from './components/ColorBox';
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colours:</Text>
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Blue" colorHex="#268bd2" />
        <ColorBox colorName="Magenta" colorHex="#d33682" />
        <ColorBox colorName="Orange" colorHex="#FF00FF" />
      </View>
    </SafeAreaView>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
