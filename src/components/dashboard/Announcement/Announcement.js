import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'

import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

export default class Announcement extends Component {

  static navigationOptions = { header: null }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
            backgroundColor="#d50000"
            barStyle="light-content"
        />
        <View>
          <Header name="Announcement" prop={this.props}/>
        </View>
        <View style={{flex: 1}}>
          <Text> Announcement </Text>
        </View>
        <View>
          <Footer announcementColor='#d50000' prop={this.props}/>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({})
