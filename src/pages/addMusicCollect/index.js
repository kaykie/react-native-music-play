import React, {Component} from 'react';
import {
  View,
  Text, TouchableHighlight, StyleSheet,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import MyInput from "../../components/myInput";
import {Button} from "react-native-elements";

@inject('store')
@observer
class AddMusicCollect extends Component {

  onChangeText(text){
    this.props.store.musicCollectName = text;
  }

  save(){
    const {musicCollectList,musicCollectName} = this.props.store;
    if(!musicCollectList.some(item => item.name === musicCollectName)){
      this.props.navigation.goBack();
      this.props.store.saveMusicCollect();
    }
  }

  render() {
    const {musicCollectName} = this.props.store;
    return (
      <View style={styles.modalWarp}>
        <MyInput
          value = {musicCollectName}
          onChangeText={this.onChangeText.bind(this)}
          placeholder='请输入歌集名称'/>
        <TouchableHighlight
          style={styles.buttonWarp}
        >
          <Button
            onPress={this.save.bind(this)}
            title='保存'
          />
        </TouchableHighlight>
      </View>
    )
  }
}


export default AddMusicCollect


const styles = StyleSheet.create({
  modalWarp:{
    flex: 1,
  },
  buttonWarp: {
    marginTop: 200
  }
});
