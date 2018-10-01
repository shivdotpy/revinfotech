import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import {Icon} from 'react-native-elements'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginHorizontal: 20}}>
            {/* <Text>Hi</Text> */}
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#ffffff'}}> {this.props.name} </Text>
        </View>
        <TouchableOpacity style={{marginHorizontal: 20}}>
            <Icon type="material-community" name="logout" size={23} color="#ffffff"/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ff5131'
    }
})
