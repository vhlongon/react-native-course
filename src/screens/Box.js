import React from 'react';
import { Text, Dimensions, ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// all elements in native have display fex column per default
// and alignItems in "stretch" per default
const styles = ({ numberOfItems = 1, height = '100%' }) =>
  EStyleSheet.create({
    $marginBase: 4,
    $borderWidthBase: 4,
    $borderRadius: 4,
    $padding: 4,
    container: {
      borderColor: 'gold',
      backgroundColor: 'lightyellow',
      borderWidth: '$borderWidthBase / 2',
      margin: '$marginBase * 2',
      maxHeight: `${height} + $borderWidthBase`,
    },
    item: { color: 'white' },
    itemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'lightgray',
      borderWidth: '$borderWidthBase / 2',
      borderRadius: '$borderRadius',
      margin: '$marginBase / 2',
      height: `${height / numberOfItems} - $marginBase`,
      padding: '$padding',
    },
    autoFill: {
      ...EStyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(255, 105, 180, 0.5);',
      color: 'crimson',
    },
  });

const colors = ['red', 'green', 'blue'];

const Box = () => {
  const { height } = Dimensions.get('window');
  const { container, item, itemContainer, autoFill } = styles({
    numberOfItems: colors.length,
    height: height / 2,
  });

  // use contentContainerStyle={{ alignItems: 'whatever' }} to control items alignment in a ScrollView element
  return (
    <View>
      <ScrollView style={container}>
        {colors.map(x => (
          <View key={x} style={[itemContainer, { backgroundColor: x }]}>
            <Text style={item}>Box screen {x}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={autoFill}>I am auto absolut auto fill</Text>
    </View>
  );
};

export default Box;
