import React from 'react';
import { Text, Button, View /* TouchableOpacity */ } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    margin: 5,
    textAlign: 'center',
  },
});

// Button is a simple primitive component from react native with little stuff
// and renders a with predefined styles, to add more styles it needs some extra layout component

// whereas TouchableOpacity has a lot more functionality to it and can render any element
// and it can be customized in any way
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Choose one:</Text>
      <View style={styles.button}>
        {/*  this this the  */}
        <Button title="Go to components demo" onPress={() => navigation.navigate('Components')} />
      </View>
      <View style={styles.button}>
        <Button title="Go to list demo" onPress={() => navigation.navigate('List')} />
      </View>
      <View style={styles.button}>
        <Button title="Go to image demo" onPress={() => navigation.navigate('Image')} />
      </View>
      <View style={styles.button}>
        <Button title="Go to counter demo" onPress={() => navigation.navigate('Counter')} />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to random color demo"
          onPress={() => navigation.navigate('RandomColor')}
        />
      </View>
      <View style={styles.button}>
        <Button title="Go to rbg color demo" onPress={() => navigation.navigate('RgbColor')} />
      </View>
      <View style={styles.button}>
        <Button title="Go to text demo" onPress={() => navigation.navigate('Text')} />
      </View>
      <View style={styles.button}>
        <Button title="Go to box demo" onPress={() => navigation.navigate('Box')} />
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.item}>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;
