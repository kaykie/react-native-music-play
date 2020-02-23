import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View} from "react-native/Libraries/Components/View/View";
import {
  RefreshControl,
  ScrollView,
  TouchableNativeFeedback
} from "react-native";
import {ListItem} from "react-native-elements";

// import RNAudiotransition from 'react-native-audiotransition';

@inject('store')
@observer
class MusicCollectList extends Component {

  componentDidMount() {
    // console.log(RNAudiotransition);
    // RNAudiotransition.initAudioTransition()
  }

  onRefresh() {
    this.props.store.init()
  }

  transformToMp3(item) {
    // return new Promise((resolve, reject) => {
    //   RNAudiotransition.audioToStart(item.path, 'aac', (res) => {
    //     resolve(res)
    //   })
    // })
  }

  itemClick(item) {
    if (this.props.fromType && this.props.fromType === 'frontBook') {
      this.props.store.handleSaveToMusicCollect(item, this.props.navigation);
      return
    }
    console.log(this.props);
    this.props.navigation.push('musicCollectDetail');
    this.props.store.songsList = item.songsList ||
      [
        {
          cover: "file:///storage/emulated/0/1702430.jpg",
          duration: "334263",
          album: "范特西",
          title: "安静",
          fileName: "周杰伦 - 安静.mp3",
          path: "/storage/emulated/0/WindCloud/周杰伦 - 安静.mp3",
          author: "周杰伦",
          id: "1702430",
        },
        {
          cover: "file:///storage/emulated/0/1702317.jpg",
          duration: "295693",
          album: "十一月的萧邦",
          title: "一路向北",
          fileName: "周杰伦 - 一路向北.flac",
          path: "/storage/emulated/0/BaiduNetdisk/我的资源/周杰伦 - 全部专辑/十一月的萧邦/周杰伦 - 一路向北.flac",
          author: "周杰伦",
          id: "1702317"
        },
        {
          cover: "file:///storage/emulated/0/1702302.jpg",
          duration: "299200",
          album: "七里香",
          title: "七里香",
          fileName: "周杰伦 - 七里香.flac",
          path: "/storage/emulated/0/BaiduNetdisk/我的资源/周杰伦 - 全部专辑/七里香/周杰伦 - 七里香.flac",
          author: "周杰伦",
          id: "1702302",
        },
        {
          cover: "file:///storage/emulated/0/1702336.jpg",
          duration: "280386",
          album: "叶惠美",
          title: "三年二班",
          fileName: "周杰伦 - 三年二班.flac",
          path: "/storage/emulated/0/BaiduNetdisk/我的资源/周杰伦 - 全部专辑/叶惠美/周杰伦 - 三年二班.flac",
          author: "周杰伦",
          id: "1702336"
        },
        {
          cover: "file:///storage/emulated/0/1702275.jpg",
          duration: "195800",
          album: "范特西",
          title: "上海一九四三",
          fileName: "周杰伦 - 上海一九四三.flac",
          path: "/storage/emulated/0/BaiduNetdisk/我的资源/周杰伦 - 全部专辑/范特西/周杰伦 - 上海一九四三.flac",
          author: "周杰伦",
          id: "1702275"
        },
        {
          cover: "file:///storage/emulated/0/1702333.jpg",
          duration: "315414",
          album: "叶惠美",
          title: "东风破",
          fileName: "周杰伦 - 东风破.flac",
          path: "/storage/emulated/0/BaiduNetdisk/我的资源/周杰伦 - 全部专辑/叶惠美/周杰伦 - 东风破.flac",
          author: "周杰伦",
          id: "1702333"
        },
        {
          cover: "file:///storage/emulated/0/1702295.jpg",
          duration: "256600",
          album: "魔杰座",
          title: "乔克叔叔",
          fileName: "周杰伦 - 乔克叔叔.flac",
          path: "/storage/emulated/0/BaiduNetdisk/我的资源/周杰伦 - 全部专辑/魔杰座/周杰伦 - 乔克叔叔.flac",
          author: "周杰伦",
          id: "1702295"
        }
      ];
  }

  render() {
    const {musicCollectList, isRefreshing} = this.props.store;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={this.onRefresh.bind(this)}
          />}
      >
        {
          musicCollectList.map((item, index) => {
            return (
              <TouchableNativeFeedback
                key={index}
                onPress={this.itemClick.bind(this, item)}>
                <ListItem
                  title={item.name}
                  subtitle={item.time || '未设置时间'}
                  bottomDivider
                  chevron
                />
              </TouchableNativeFeedback>
            )
          })
        }

      </ScrollView>
    )
  }
}

export default MusicCollectList;
