import React, { useReducer } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Button, Text, Dimensions } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const styles = EStyleSheet.create({
  counterContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 15,
  },
  counter: {
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'lightgray',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    padding: 2,
    maxWidth: '33.33%',
  },
  colorContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    height: 400,
    width: '100%',
    padding: 10,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 12,
    color: 'white',
    backgroundColor: 'rgba(169, 169, 169, 0.5)',
    padding: 4,
    borderRadius: 2,
  },
});

const STEP = 15;
const CHANGE_RED = 'CHANGE_RED';
const CHANGE_GREEN = 'CHANGE_BLUE';
const CHANGE_BLUE = 'CHANGE_GREEN';

const isOutsideBoundaries = (currentColorValue, amount) =>
  currentColorValue + amount > 255 || currentColorValue + amount < 0;

const colorsReducer = (state, { type, payload }) => {
  const { red, green, blue } = state;
  const newState = {
    [CHANGE_RED]: isOutsideBoundaries(red, payload) ? state : { ...state, red: red + payload },
    [CHANGE_GREEN]: isOutsideBoundaries(green, payload)
      ? state
      : { ...state, green: green + payload },
    [CHANGE_BLUE]: isOutsideBoundaries(blue, payload) ? state : { ...state, blue: blue + payload },
  };

  return newState[type] || state;
};

const RgbColor = () => {
  const [colors, dispatchColors] = useReducer(colorsReducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { width } = Dimensions.get('window');
  const { red, green, blue } = colors;

  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <View style={{ padding: 20, width }}>
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <ColorCounter
            color="red"
            onIncrease={() => dispatchColors({ type: CHANGE_RED, payload: STEP })}
            onDecrease={() => dispatchColors({ type: CHANGE_RED, payload: -STEP })}
          />
        </View>
        <View style={styles.counter}>
          <ColorCounter
            color="green"
            onIncrease={() => dispatchColors({ type: CHANGE_GREEN, payload: STEP })}
            onDecrease={() => dispatchColors({ type: CHANGE_GREEN, payload: -STEP })}
          />
        </View>
        <View style={styles.counter}>
          <ColorCounter
            color="blue"
            onIncrease={() => dispatchColors({ type: CHANGE_BLUE, payload: STEP })}
            onDecrease={() => dispatchColors({ type: CHANGE_BLUE, payload: -STEP })}
          />
        </View>
      </View>
      <Button title="Reset" onPress={() => dispatchColors({ red: 0, green: 0, blue: 0 })} />
      <View style={styles.colorContainer}>
        <View
          style={{
            width: 300,
            height: 300,
            borderRadius: 150,
            borderColor: 'lightgray',
            borderWidth: 4,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor,
          }}
        >
          <Text style={styles.text}>{backgroundColor}</Text>
        </View>
      </View>
    </View>
  );
};

export default RgbColor;
