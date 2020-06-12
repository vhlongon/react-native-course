import React from 'react';
import { Text, View, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => (
  <View>
    <Image source={imageSource} />
    <Text>{title}</Text>
    <Text>Image score: {score}</Text>
  </View>
);

export default ImageDetail;
