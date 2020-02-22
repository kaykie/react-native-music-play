import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View} from "react-native/Libraries/Components/View/View";
import {
  RefreshControl,
  ScrollView,
  TouchableNativeFeedback
} from "react-native";
import {ListItem} from "react-native-elements";


@inject('store')
@observer
class MusicCollectList extends Component {

  onRefresh() {
    this.props.store.init()
  }

  itemClick(item) {
    if(this.props.fromType && this.props.fromType === 'frontBook'){
      this.props.store.handleSaveToMusicCollect(item,this.props.navigation);
      return
    }
    console.log(this.props);
    this.props.navigation.push('musicCollectDetail');
    this.props.store.songsList = item.songsList || [
      {
        cover: "file:///storage/emulated/0/1702317.jpg",
        duration: "295693",
        album: "十一月的萧邦",
        title: "一路向北",
        fileName: "周杰伦 - 一路向北.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702302.jpg",
        duration: "299200",
        album: "七里香",
        title: "七里香",
        fileName: "周杰伦 - 七里香.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702336.jpg",
        duration: "280386",
        album: "叶惠美",
        title: "三年二班",
        fileName: "周杰伦 - 三年二班.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702275.jpg",
        duration: "195800",
        album: "范特西",
        title: "上海一九四三",
        fileName: "周杰伦 - 上海一九四三.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702333.jpg",
        duration: "315414",
        album: "叶惠美",
        title: "东风破",
        fileName: "周杰伦 - 东风破.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702295.jpg",
        duration: "256600",
        album: "魔杰座",
        title: "乔克叔叔",
        fileName: "周杰伦 - 乔克叔叔.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702303.jpg",
        duration: "279840",
        album: "七里香",
        title: "乱舞春秋",
        fileName: "周杰伦 - 乱舞春秋.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702340.jpg",
        duration: "342000",
        album: "叶惠美",
        title: "以父之名",
        fileName: "周杰伦 - 以父之名.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702360.jpg",
        duration: "209160",
        album: "Jay",
        title: "伊斯坦堡",
        fileName: "周杰伦 - 伊斯坦堡.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702332.jpg",
        duration: "230480",
        album: "叶惠美",
        title: "你听得到",
        fileName: "周杰伦 - 你听得到.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702301.jpg",
        duration: "260267",
        album: "七里香",
        title: "借口",
        fileName: "周杰伦 - 借口.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702281.jpg",
        duration: "239080",
        album: "跨时代",
        title: "免费教学录影带",
        fileName: "周杰伦 - 免费教学录影带.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702293.jpg",
        duration: "253960",
        album: "魔杰座",
        title: "兰亭序",
        fileName: "周杰伦 - 兰亭序.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702349.jpg",
        duration: "256373",
        album: "依然范特西",
        title: "千里之外",
        fileName: "周杰伦;费玉清 - 千里之外.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702361.jpg",
        duration: "304533",
        album: "Jay",
        title: "印第安老斑鸠",
        fileName: "周杰伦 - 印第安老斑鸠.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702337.jpg",
        duration: "291413",
        album: "叶惠美",
        title: "双刀",
        fileName: "周杰伦 - 双刀.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702276.jpg",
        duration: "201013",
        album: "范特西",
        title: "双截棍",
        fileName: "周杰伦 - 双截棍.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702354.jpg",
        duration: "258107",
        album: "Jay",
        title: "反方向的钟",
        fileName: "周杰伦 - 反方向的钟.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702309.jpg",
        duration: "301640",
        album: "十一月的萧邦",
        title: "发如雪",
        fileName: "周杰伦 - 发如雪.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702355.jpg",
        duration: "239027",
        album: "Jay",
        title: "可爱女人",
        fileName: "周杰伦 - 可爱女人.flac"
      },
      {
        cover: "file:///storage/emulated/0/1702363.jpg",
        duration: "231000",
        album: "叶惠美",
        title: "同一种调调",
        fileName: "周杰伦 - 同一种调调.flac"
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
