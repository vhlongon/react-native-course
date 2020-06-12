import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// all elements in native have display fex column per default
// and alignItems in "stretch" per default
const styles = EStyleSheet.create({
  container: {
    borderColor: 'gold',
    borderWidth: 2,
    margin: 10,
    height: 200,
  },
  item: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 4,
    margin: 5,
    padding: 5,
  },
});

const Box = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.item, { flexBasis: '50%' }]}>Box screen 1</Text>
      <Text style={[styles.item, { flexBasis: '25%' }]}>Box screen 2</Text>
      <Text style={[styles.item, { flexBasis: '25%' }]}>Box screen 3</Text>
    </View>
  );
};

export default Box;
