import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Dimensions } from 'react-native'


import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

const width = (Dimensions.get('window').width - 40) / 3;

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
          <Header name="Upcoming Events" prop={this.props}/>
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text style={{fontWeight: '600'}}>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Independence Day</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
              <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Independence Day</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>15 Aug 2018</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>Diwali</Text>
              </View>
          </View>
          </View>
          
        </View>
        <View>
          <Footer announcementColor='#d50000' prop={this.props}/>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.7,
    borderColor: 'red',
    width: width,
    marginLeft: 10,
    marginTop: 15,
    elevation: 1,
    borderRadius: 5
  },
  cardTop: {
    backgroundColor: '#ff5131',
    padding: 10,
    alignItems: 'center'
  },
  cardBottom: {
    padding: 10,
    alignItems: 'center'
  }
})
