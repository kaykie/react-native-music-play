import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './home';
import MusicListDetail from './musicSearchListDetail';
import AddMusicCollect from './addMusicCollect';
import MusicCollectDetail from './musicCollectDetail';
import ChooseMusicCollect from './chooseMusicCollect';
import config from '../config';
import {View,Text} from 'react-native';


export default StackNavigator({
  home: {
    screen: Home,
    navigationOptions:config.navigationOptions('首页',null)
  },
  musicListDetail: {
    screen: MusicListDetail,
    navigationOptions: ({navigation}) =>{
      return config.navigationOptions('添加音乐到歌集',true,navigation)
    }
  },
  addMusicCollect: {
    screen: AddMusicCollect,
    navigationOptions: ({navigation}) =>{
      return config.navigationOptions('添加歌集',true,navigation)
    }
  },
  musicCollectDetail: {
    screen: MusicCollectDetail,
    navigationOptions: ({navigation}) =>{
      return config.navigationOptions('播放歌集',true,navigation)
    }
  },
  chooseMusicCollect: {
    screen: ChooseMusicCollect,
    navigationOptions: ({navigation}) =>{
      return config.navigationOptions('选择歌集',true,navigation)
    }
  },
}, {
  initialRouteName: 'home',
  drawerWidth: 300
});

