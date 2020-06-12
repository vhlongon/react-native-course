import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>{`Current Counter: ${counter}`}</Text>
      <Button
        title="increase"
        onPress={() => {
          setCounter(c => c + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCounter(c => c - 1);
        }}
      />
    </View>
  );
};

export default Counter;
