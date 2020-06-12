import React from 'react';
import { View, Button, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  button: { padding: 2 },
});

const ColorCounter = ({ color, onIncrease = () => {}, onDecrease = () => {} }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    }}
  >
    <Text style={{ color }}>{color}</Text>
    <View style={styles.button}>
      <Button title="+" onPress={onIncrease} />
    </View>
    <View style={styles.button}>
      <Button title="-" onPress={onDecrease} />
    </View>
  </View>
);

export default ColorCounter;
