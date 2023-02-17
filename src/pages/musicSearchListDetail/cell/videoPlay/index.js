import React, {Component} from 'react';
import {
  View
} from 'react-native';
import MyVideo from '../../../../components/myVideo'
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class VideoPlay extends Component {


  handleVideoProgress(process) {
    console.log(process);
    this.props.store.process = process;
  }

  render() {
    const {currentMusic, isPaused, volume} = this.props.store;
    console.log(currentMusic);
    return (
      <View>
        <MyVideo
          music={currentMusic}
          isPaused={isPaused}
          volume={volume}
          onSavePlayer={(ref) => {
            this.props.store.uniquePlayer = ref;
          }}
          onEnd={this.props.store.handleNextMusic()}
          onProcess={this.handleVideoProgress.bind(this)}
        />
      </View>
    )
  }
}

export default VideoPlay
