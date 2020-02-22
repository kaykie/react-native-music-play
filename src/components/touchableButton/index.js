import React, {Component} from 'react';
import {
  View,
  Text, TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import {Icon} from "react-native-elements";


function TouchableButton({onPress, iconName, buttonName}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.ms_icon_warp}>
        <View>
          <Icon
            type="entypo"
            size={20}
            color="rgba(0,0,0,.1)"
            name={iconName}
          />
        </View>
        {
          buttonName && <View>
            <Text style={styles.ms_controll_text}>{buttonName}</Text>
          </View>
        }
      </View>
    </TouchableNativeFeedback>
  )
}


export default TouchableButton;

const styles = StyleSheet.create({
  ms_icon_warp: {
    flex: 1,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  ms_controll_text: {
    paddingLeft: 10
  }
});
