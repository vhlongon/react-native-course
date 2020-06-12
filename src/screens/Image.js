/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const Image = () => (
  <View>
    <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
    <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={7} />
    <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={4} />
  </View>
);

export default Image;
