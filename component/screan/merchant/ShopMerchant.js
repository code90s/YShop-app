/**
 * Created by yanmeng on 2018/3/31.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  WebView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};
export default class Merchant extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      detailUrl: 'https://www.baidu.com'
    }
  }

  render() {
    return (
        <View style={styles.container}>
          {/*导航*/}
          {/*{this.renderNavBar()}*/}

          <WebView
              automaticallyAdjustContentInsets={true}
              source={{uri: this.state.detailUrl}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              decelerationRate="normal"
              startInLoadingState={true}
          />
        </View>
    );
  };

  // 导航条
  renderNavBar() {
    return (
        <View style={styles.navOutViewStyle}>
          <TouchableOpacity onPress={() => {
            this.props.navigator.pop()
          }} style={styles.leftViewStyle}>
            <Image source={{uri: 'icon_shop_local'}} style={styles.navImageStyle}/>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>商家</Text>
          <TouchableOpacity onPress={() => {
            alert('点了!')
          }} style={styles.rightViewStyle}>
            <Image source={{uri: 'icon_shop_search'}} style={styles.navImageStyle}/>
          </TouchableOpacity>
        </View>
    )
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  navImageStyle: {
    width: Platform.OS == 'ios' ? 28 : 24,
    height: Platform.OS == 'ios' ? 28 : 24,
  },

  leftViewStyle: {
    // 绝对定位
    position: 'absolute',
    left: 10,
    bottom: Platform.OS == 'ios' ? 15 : 13
  },

  rightViewStyle: {
    // 绝对定位
    position: 'absolute',
    right: 10,
    bottom: Platform.OS == 'ios' ? 15 : 13
  },

  navOutViewStyle: {
    height: Platform.OS == 'ios' ? 64 : 44,
    backgroundColor: 'rgba(255,96,0,1.0)',

    // 设置主轴的方向
    flexDirection: 'row',
    // 垂直居中 ---> 设置侧轴的对齐方式
    alignItems: 'center',
    // 主轴方向居中
    justifyContent: 'center'
  },
});