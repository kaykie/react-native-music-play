import React from 'react';
import { View, StatusBar } from 'react-native';

export default function MyStaturBar({ backgroundColor }) {
  return (
    <View
      style={{
        height: StatusBar.currentHeight,
        backgroundColor
      }}
    />
  );
}

MyStaturBar.defaultProps = {
  backgroundColor: '#d23023'
};
