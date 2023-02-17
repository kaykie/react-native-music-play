import {StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Icon} from "react-native-elements";
import React from "react";
const styles = StyleSheet.create({
  backWarp: {
    width: 50,
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  }
});

export default {
  navigationOptions(headerTitle,isShowHeaderLeft,navigation){
    return{
      headerTitle,
      headerLeft:isShowHeaderLeft ?
        <TouchableNativeFeedback
          onPress={()=>{navigation.goBack()}}
        >
          <View style={styles.backWarp}>
            <Icon
              type="entypo"
              size={25}
              color="#ccc"
              name='chevron-left'
            />
          </View>
        </TouchableNativeFeedback> : <View/>,
      headerTitleStyle:{
        alignSelf: 'center'
      },
      headerRight:<View/>
    }
  }
}
