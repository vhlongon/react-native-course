import React from 'react';
import { Text, Dimensions, ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// all elements in native have display fex column per default
// and alignItems in "stretch" per default
const styles = ({ numberOfItems = 1, height = '100%' }) =>
  EStyleSheet.create({
    $margin: 4,
    $borderWidth: 4,
    $borderRadius: 4,
    $padding: 4,
    container: {
      borderColor: 'gold',
      backgroundColor: 'lightyellow',
      borderWidth: '$borderWidth / 2',
      margin: '$margin * 2',
      maxHeight: `${height} + $borderWidth`,
      flex: 1,
    },
    item: { color: 'white' },
    itemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'lightgray',
      borderWidth: '$borderWidth / 2',
      borderRadius: '$borderRadius',
      margin: '$margin / 2',
      height: `${height / numberOfItems} - $margin`,
      padding: '$padding',
    },
  });

const colors = ['red', 'green', 'blue'];

const Box = () => {
  const { height } = Dimensions.get('window');
  const { container, item, itemContainer } = styles({
    numberOfItems: colors.length,
    height: height / 2,
  });

  return (
    <ScrollView style={container}>
      {colors.map(x => (
        <View style={[itemContainer, { backgroundColor: x }]}>
          <Text style={item}>Box screen {x}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Box;
