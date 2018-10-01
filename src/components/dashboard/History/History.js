import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'

import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

export default class History extends Component {

  static navigationOptions = { header: null }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
            backgroundColor="#d50000"
            barStyle="light-content"
        />
        <View>
          <Header name="History"/>
        </View>
        <View style={{flex: 1}}>
          <Text> History </Text>
        </View>
        <View>
          <Footer historyColor='#d50000' prop={this.props}/>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({})
