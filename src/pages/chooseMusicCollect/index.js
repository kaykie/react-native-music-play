import React,{Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import MusicCollectList from '../home/cell/musicCollectList';

class ChooseMusicCollect extends Component{


  render(){
    return(
      <View>
        <MusicCollectList navigation={this.props.navigation} fromType='frontBook'/>
      </View>
    )
  }
}

export default ChooseMusicCollect;
