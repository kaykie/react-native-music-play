import {observable, action} from 'mobx';
import {AsyncStorage} from 'react-native';
import {NavigationActions} from 'react-navigation'

import Toast from 'react-native-root-toast';


class Store {
  @observable musicCollectList = []; // 歌集列表,用于首页展示
  @observable songsList = []; // songsList组件的音乐列表
  @observable currentMusic = {}; // 当前播放的音乐
  @observable currentIndex = 0; // 当前播放音乐的索引
  @observable uniquePlayer = {}; // 当前Player对象
  @observable isPaused = true; // 播放器是否暂停 false为播放 true为停止
  @observable volume = 0.5;
  @observable process = 0; // 歌曲播放进度
  @observable isVisible = false; // 控制模态框展示与否
  @observable musicCollectName = ''; // 添加歌集的名称
  @observable isRefreshing = false; // 下拉刷新状态 目前未用到

  constructor() {
    console.log('store start');
  }

  // 页面首次加载时初始化
  init = async () => {
    const musicCollectList = await AsyncStorage.getItem('musicCollectList');
    this.musicCollectList = musicCollectList ? JSON.parse(musicCollectList) :[];
    console.log(this.musicCollectList);
  };

  @action
  saveSongsList(list) {
    this.songsList = [...this.songsList, ...list];
  }

  // 上一首播放完毕,播放下一首
  @action
  handleNextMusic = () => {
    this.currentIndex++;
    this.currentMusic = this.songsList[this.currentIndex];
  };

  // 点击播放按钮
  @action
  handlePlayMusic = () => {
    // 如果已经播放过了 并且是暂停状态
    if (this.process !== 0 && this.isPaused) {
      this.isPaused = false;
      this.uniquePlayer.seek(this.process.currentTime);
      return
    }
    // 如果是在播放状态
    if (!this.isPaused) {
      this.isPaused = true;
      return
    }
    // 第一次点击播放全部
    this.currentMusic = this.songsList[0];
    this.currentIndex = 0;
    this.process = 0;
    this.isPaused = false;
    this.resetCurrentMusic();
  };

  // 如果没走进度 则说明该音乐不能播放,跳到下一首音乐
  resetCurrentMusic() {
    setTimeout(() => {
      if (this.process !== 0 || this.isPaused) {
        return
      }
      this.currentIndex++;
      console.log(1111);
      // if(!this.songsList[this.currentIndex]){
      //   this.currentIndex--;
      //   return
      // }
      this.currentMusic = this.songsList[this.currentIndex];
      Toast.show('播放失败,自动播放下一首!');
      this.resetCurrentMusic();
    }, 1000)
  };

  // 保存新增歌集
  saveMusicCollect = async () => {
    const date = new Date();
    this.musicCollectList.push({
      name:this.musicCollectName,
      time:`${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
      id:new Date().getTime()
    });
    AsyncStorage.setItem('musicCollectList', JSON.stringify(this.musicCollectList),function (error) {
      if(error){
        console.log(error)
      }
      console.log('保存成功');
    });
  };

  handleGetSelectedMusic(navigation){
    this.selectedSongsList = this.songsList.filter(song => song.isCheck);
    if(!this.selectedSongsList.length){
      Toast.show('未选择歌曲!');
      return
    }
    navigation.push('chooseMusicCollect',{screenKey:navigation.state.key})
  }

  // 保存到某个歌集
  handleSaveToMusicCollect = async (item,navigation) => {
    try{
      const obj = this.musicCollectList.find(detail => detail.id === item.id);
      const arr = obj.songsList || [];
      // const selectedSongsList = this.songsList.filter(song => song.isCheck);
      const songsList = [];
      this.selectedSongsList.forEach(music => {
        if(arr.some(song => song.id === music.id)){
          return
        }
        songsList.push(music)
      });
      obj.songsList = songsList;
      await AsyncStorage.setItem('musicCollectList',JSON.stringify(this.musicCollectList));
      Toast.show('保存成功');
      navigation.goBack(navigation.getParam('screenKey'));
    }catch (e) {
      console.log(e);
    }

  }


}


const store = new Store();
export default store;
