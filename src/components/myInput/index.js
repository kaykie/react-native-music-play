import React from 'react';
import { View, TextInput } from 'react-native';

function MyInput(props) {
  return (
    <TextInput
      editable
      maxLength={40}
      {...props}
    />
  );
}

export default MyInput
