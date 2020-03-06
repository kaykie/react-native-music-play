import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  CheckBox,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image
} from 'react-native';
import {Icon} from 'react-native-elements';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
class SongsList extends Component {

  handleDelMusic(music) {
    this.props.store.handleDelMusic(music)
  }

  seletedMusic(item, index) {
    if (this.props.fromType && this.props.fromType === 'musicSearchListDetail') {
      return
    }
    this.props.store.currentIndex = index;
    this.props.store.currentMusic = item;
    this.props.store.isPaused = false;
  }

  handleCheck(item) {
    console.log(item);
    const {songsList} = this.props.store;
    const obj = songsList.find(detail => item.id === detail.id);
    obj.isCheck = !obj.isCheck;
  }

  render(): React.ReactNode {
    const {songsList,currentIndex} = this.props.store, {fromType = ''} = this.props;
    return (
      <View>
        {
          songsList.map((item, index) => {
            if (item.fileName || item.title) {
              return (
                <View
                  key={index}
                >
                  <View style={styles.ms_list}>
                    <View
                      style={styles.ms_order_warp}
                    >
                      {
                        fromType === 'musicCollectDetail' ? <Text>
                          {index + 1}
                        </Text> : <CheckBox
                          value={item.isCheck}
                          onChange={this.handleCheck.bind(this, item)}
                        />
                      }
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={fromType === 'musicCollectDetail' && index === currentIndex ? styles.ms_detail_active : styles.ms_detail}
                      onPress={this.seletedMusic.bind(this, item, index)}
                    >
                      <View style={styles.ms_detail_title}>
                        <View>
                          <Text>{item.fileName || item.title}</Text>
                        </View>
                        <View>
                          <Text>{item.author}</Text>
                        </View>
                      </View>
                      {
                        fromType === 'musicCollectDetail' &&
                        <TouchableNativeFeedback onPress={this.handleDelMusic.bind(this,item)}>
                          <View style={styles.ms_detail_icon}>
                            <Icon
                              type="MaterialIcons"
                              size={15}
                              reverse
                              reverseColor="#fff"
                              color="rgba(0,0,0,.1)"
                              name="delete"
                            />
                          </View>
                        </TouchableNativeFeedback>
                      }

                    </TouchableOpacity>
                  </View>
                </View>
              )
            }
            return (
              <View key={index}/>
            )
          })
        }
      </View>
    )
  }
}

export default SongsList;

const styles = StyleSheet.create({
  ms_list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ms_order_warp: {
    width: 60,
    paddingLeft: 10
  },
  ms_detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid'
  },
  ms_detail_active:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#f00'
  },
  ms_detail_title: {
    flex: 1
  },
  ms_detail_icon: {
    justifyContent: 'center'
  }
});
