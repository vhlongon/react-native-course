import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: { margin: 20 },
  input: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 10,
    padding: 5,
  },
  text: {
    fontWeight: '700',
    fontStyle: 'italic',
  },
});

const TextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="enter stuff"
      />
      {text.length < 4 && <Text>Text should be at least 5 characters</Text>}
      <Text>
        Current value: <Text style={styles.text}>{text}</Text>
      </Text>
    </View>
  );
};

export default TextScreen;
