import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Icon} from "react-native-elements";


class FixButton extends Component {

  render() {
    return (
      <View style={styles.fixWarp} >
        <TouchableOpacity {...this.props}>
          <Icon
            type="MaterialIcons"
            size={25}
            color='#fff'
            name='add'
          />
        </TouchableOpacity>
      </View>
    )
  }
}


export default FixButton

const styles = StyleSheet.create({
  fixWarp: {
    backgroundColor:'#aaa',
    width: 50,
    height: 50,
    borderRadius:25,
    position: 'absolute',
    bottom: 50,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'blue',
  }
});
