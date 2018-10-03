import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native'

import {Tile} from 'react-native-elements';

// Footer
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';


export default class Apply extends Component {
  
  static navigationOptions = { header: null }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
            backgroundColor="#d50000"
            barStyle="light-content"
        />
        <View>
          <Header name="Home" prop={this.props}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.tile}>
                            <Text style={{fontSize: 30}}>0</Text>
                            <Text>Remaining</Text>
                        </View>
                        <View style={styles.tile}>
                            <Text style={{fontSize: 30}}>12</Text>
                            <Text>Total</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#d50000', paddingHorizontal: 20, paddingVertical: 10, marginTop: 20, borderRadius: 1}}>
                        <Text>Apply</Text>
                    </TouchableOpacity>
        </View>
        <View>
          <Footer applyColor='#d50000' prop={this.props}/>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
    tile: {
        backgroundColor: '#ff5131',
        margin: 20,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1
    }
});
