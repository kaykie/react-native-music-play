import React, {Component} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native'
import {inject, observer} from 'mobx-react'
import FixButton from '../../components/fixButton';
import MusicCollectList from './cell/musicCollectList';
import TouchableButton from '../../components/touchableButton';

@inject('store')
@observer
class Home extends Component {


  async componentDidMount() {
    this.props.store.init()
  }

  openAddModal() {
    this.props.navigation.push('addMusicCollect')
  }

  // 跳转到音乐搜索页面
  jumpToMusicListDetail(){
    this.props.store.songsList = [];
    this.props.navigation.push('musicListDetail');
  }

  render() {
    return (
      <View style={styles.rnWarp}>
        <View style={styles.rnSearchWarp}>
          <TouchableButton
            iconName='magnifying-glass'
            buttonName='搜索本地音乐'
            onPress={this.jumpToMusicListDetail.bind(this)}
          />
        </View>
        <MusicCollectList navigation={this.props.navigation}/>
        <FixButton onPress={this.openAddModal.bind(this)}/>
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  rnWarp:{
    flex:1
  },
  rnSearchWarp:{
    height:50
  }
});
