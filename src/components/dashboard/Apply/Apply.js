import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'

// Footer
import Footer from '../Common/Footer/Footer'

export default class Apply extends Component {
  
  static navigationOptions = { header: null }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
            backgroundColor="#d50000"
            barStyle="light-content"
        />
        <View style={{flex: 1}}>
          <Text> Apply </Text>
        </View>
        <View>
          <Footer applyColor='#d50000'/>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({})
