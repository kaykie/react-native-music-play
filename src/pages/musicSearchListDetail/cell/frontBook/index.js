import React, {Component} from 'react';
import {
  View, Text, StyleSheet,
  Modal, DeviceEventEmitter
} from "react-native";
import {observer, inject} from 'mobx-react'
import MusicFiles from "react-native-get-music-files";
import TouchableButton from '../../../../components/touchableButton'
import MusicCollectList from '../../../home/cell/musicCollectList';

@inject('store')
@observer
class FrontBook extends Component {

  componentWillMount() {
    DeviceEventEmitter.addListener(
      'onBatchReceived',
      (params) => {
        console.log(params.batch);
        // if (this.props.store.songsList.length >= 20) {
        //   DeviceEventEmitter.removeAllListeners('onBatchReceived');
        // }
        const zhouJieLunList = params.batch.filter(item => item.author === '周杰伦')
        // const list = params.batch.map(item => {
        //   return {
        //     ...item,
        //     isCheck: false
        //   }
        // });
        console.log(zhouJieLunList)
        const list = zhouJieLunList.map(item => {
          return {
            ...item,
            isCheck: false
          }
        });
        if (list.length) {
          this.props.store.saveSongsList(list);
        }
      }
    )
  }

  handlePlay() {
    this.props.store.handlePlayMusic()
  }

  handleGetAllMusic() {
    // utils.requestCameraPermission();
    MusicFiles.getAll({
      id: true,
      blured: false,
      artist: true,
      duration: true, //default : true
      cover: true, //default : true,
      title: true,
      batchNumber: 6, //get 5 songs per batch
      minimumSongDuration: 10000, //in miliseconds,
      fields: ['title', 'artwork', 'duration', 'artist', 'genre', 'lyrics', 'albumTitle']
    });
  }

  handleOpenMusicCollect() {
    this.props.store.handleGetSelectedMusic(this.props.navigation);
  }


  render() {
    const {isPaused} = this.props.store;
    return (
      <View style={styles.ms_frontBook}>
        <View style={styles.ms_image_warp}>
          <Text>封面</Text>
        </View>
        <View>
          <TouchableButton
            onPress={this.handleGetAllMusic.bind(this)}
            iconName='cw'
            buttonName='重新拉取本地资源'
          />
        </View>
        <TouchableButton
          onPress={this.handleOpenMusicCollect.bind(this)}
          iconName='save'
          buttonName={'保存到歌集'}
        />
      </View>
    )
  }
}


export default FrontBook

const styles = StyleSheet.create({

  ms_frontBook: {
    flex: 1
  },
  ms_image_warp: {
    height: 100
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalWarp: {
    height: 300,
    width: '100%',
    backgroundColor: '#fff'
  }
});
