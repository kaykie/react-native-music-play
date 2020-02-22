import React, {Component} from 'react'
import {inject, observer} from 'mobx-react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import SongsList from '../musicSearchListDetail/cell/songsList';
import TouchableButton from "../../components/touchableButton";
import Video from 'react-native-video'
import MyVideo from '../../components/myVideo';

@inject('store')
@observer
class MusicCollectDetail extends Component {

  handlePlay() {
    this.props.store.handlePlayMusic()
  }

  handleVideoProgress(process) {
    this.props.store.process = process;
  }
  handleVideoError(err) {
    console.log(err);
  }

  handleVideoEnd() {
    this.props.store.handleNextMusic()
  }

  handleVideoLoad() {
    console.log('load')
  }

  handleVideoTime() {
    console.log('onTimedMetadata')
  }

  handleVideoLoadStart() {
    console.log('loadStart')
  }

  err(err) {
    console.log(err)
  }


  render() {
    const {isPaused,currentMusic,volume} = this.props.store;
    return (
      <ScrollView>
        {
          currentMusic.path && <Video
            audioOnly
            playInBackground
            volume={volume}
            paused={isPaused}
            source={{uri: currentMusic.path}}   // Can be a URL or a local file.
            ref={(ref) => {
              this.props.store.uniquePlayer = ref;
            }}                                      // Store reference
            onEnd={this.handleVideoEnd.bind(this)}
            onLoad={this.handleVideoLoad.bind(this)}
            onLoadStart={this.handleVideoLoadStart.bind(this)}
            onTimedMetadata={this.handleVideoTime.bind(this)}
            onProgress={this.handleVideoProgress.bind(this)}
            onVideoError={this.err.bind(this)}
            onError={this.handleVideoError.bind(this)}               // Callback when video cannot be loaded
          />
        }
        <View>
          <Text>歌集名称</Text>
        </View>
        <TouchableButton
          onPress={this.handlePlay.bind(this)}
          iconName={!isPaused ? 'controller-paus' : 'controller-play'}
          buttonName={!isPaused ? '暂停' : '播放'}
        />
        <SongsList fromType='musicCollectDetail'/>
      </ScrollView>
    )
  }
}


export default MusicCollectDetail
