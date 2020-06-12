import React, { useState } from 'react';
import { View, Button, Text, FlatList, Dimensions } from 'react-native';

const getRandomColor = () => Math.floor(Math.random() * 256);
const getRandomBgColor = () => {
  const red = getRandomColor();
  const green = getRandomColor();
  const blue = getRandomColor();
  return `rgb(${red}, ${green}, ${blue})`;
};

const RandomColor = () => {
  const [colors, setColors] = useState([]);

  return (
    <View style={{ padding: 20, width: Dimensions.get('window').width }}>
      <View style={{ marginBottom: 10 }}>
        <Button
          title="Add a color"
          onPress={() => {
            setColors([...colors, getRandomBgColor()]);
          }}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button
          title="Reset"
          onPress={() => {
            setColors([]);
          }}
        />
      </View>
      <FlatList
        numColumns={3}
        data={colors}
        keyExtractor={(color) => `color-${color}`}
        renderItem={({ item }) => (
          <View
            className="item-container"
            style={{
              height: 100,
              backgroundColor: item,
              padding: 5,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '33.33%',
            }}
          >
            <Text
              style={{
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 12,
                color: 'white',
                backgroundColor: 'rgba(169, 169, 169, 0.5)',
                padding: 4,
                borderRadius: 2,
              }}
            >
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default RandomColor;
