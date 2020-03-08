import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native'
import SongsList from './cell/songsList'
import FrontBook from './cell/frontBook'
import Video from 'react-native-video'
import {inject, observer} from 'mobx-react'

@inject('store')
@observer
class MusicListDetail extends Component {


  render() {
    const {currentMusic, isSearch, volume} = this.props.store;
    console.log(currentMusic);
    return (
      <View style={styles.detailContainer}>
        <ScrollView>
          <FrontBook
            navigation={this.props.navigation}
          />
          {
            isSearch ? <View>
              <Text>
                搜索中...
              </Text>
            </View> : <View/>
          }
          <SongsList fromType='musicSearchListDetail'/>
        </ScrollView>
      </View>
    )
  }
}


export default MusicListDetail

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1
  },

})
