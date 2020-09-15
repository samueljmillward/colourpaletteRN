import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colours:</Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.box}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.box}>Blue: #2aa198</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.box}>Magenta: #FF00FF</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.box}>Orange: #FF00FF</Text>
        </View>
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
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#FF00FF',
  },
  orange: {
    backgroundColor: 'orange',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
