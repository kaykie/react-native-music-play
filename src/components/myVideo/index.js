import React,{Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import Video from 'react-native-video';

class MyVideo extends Component{

  handleVideoError(err) {
    console.log(err);
  }

  handleVideoEnd() {
    this.props.onEnd();
  }

  handleVideoLoad() {
    console.log('load')
  }

  handleVideoProgress(process) {
    this.props.onProcess(process);
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


  render(){
    console.log(this.props);
    const {music,volume,isPaused} = this.props;
    return(
      <View>
        {
          music.path && <Video
            audioOnly
            playInBackground
            volume={volume}
            paused={isPaused}
            source={{uri: music.path}}   // Can be a URL or a local file.
            ref={(ref) => {
              this.props.onSavePlayer(ref);
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
      </View>
    )
  }
}


export default MyVideo
