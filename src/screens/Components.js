import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  text: {
    fontSize: 30,
    color: 'green',
  },
  otherText: {
    color: 'red',
    fontSize: 15,
  },
});

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is the screen componentzzz</Text>
      <Text style={styles.otherText}>Another text</Text>
    </View>
  );
};

export default ComponentsScreen;
