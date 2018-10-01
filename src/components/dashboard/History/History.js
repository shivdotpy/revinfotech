import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Dimensions, ScrollView } from 'react-native'

import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

const width = Dimensions.get('window').width - 20;

export default class History extends Component {

  // Params

  /*
    Date
    Reason
    Status
    Backup Plan
    No. of leaves
    leave type
    time fo leave (eg evening, morning)
  */

  static navigationOptions = { header: null }

  render() {

    
    return (
      <View style={{flex: 1}}>
        <StatusBar
            backgroundColor="#d50000"
            barStyle="light-content"
        />
        <View>
          <Header name="History" prop={this.props}/>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ScrollView showsVerticalScrollIndicator= {false}>
          {/* Card View */}
          <View style={styles.box}>
            <View style={{flexDirection: 'row', padding: 5}}>
                <View style={{flex: 1}}>
                  <Text style={styles.boxTextWhiteHeading}>24 Feb 2018</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={styles.boxTextWhiteHeading}>Approved</Text>
                </View>
            </View>

            <View style={{padding: 5}}>
              <Text style={styles.boxTextWhiteHeading}>Reason: Family Function</Text>
              <Text style={styles.boxTextWhiteHeading}>Application Date: 20 Feb 2018</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5}}>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Leave Type</Text>
                <Text style={styles.boxTextWhite}>Full Day</Text>
                
              </View>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Leave Count</Text>
                <Text style={styles.boxTextWhite}>1</Text>

              </View>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Backup Plan</Text>
                <Text style={styles.boxTextWhite}>Akshay Seth</Text>
                
              </View>
            </View>

          </View>

          <View style={styles.box}>
            <View style={{flexDirection: 'row', padding: 5}}>
                <View style={{flex: 1}}>
                  <Text style={styles.boxTextWhiteHeading}>24 Feb 2018</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={styles.boxTextWhiteHeading}>Approved</Text>
                </View>
            </View>

            <View style={{padding: 5}}>
              <Text style={styles.boxTextWhiteHeading}>Reason: Family Function</Text>
              <Text style={styles.boxTextWhiteHeading}>Application Date: 20 Feb 2018</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5}}>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Leave Type</Text>
                <Text style={styles.boxTextWhite}>Full Day</Text>
                
              </View>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Leave Count</Text>
                <Text style={styles.boxTextWhite}>1</Text>

              </View>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Backup Plan</Text>
                <Text style={styles.boxTextWhite}>Akshay Seth</Text>
                
              </View>
            </View>

          </View>

          <View style={styles.box}>
            <View style={{flexDirection: 'row', padding: 5}}>
                <View style={{flex: 1}}>
                  <Text style={styles.boxTextWhiteHeading}>24 Feb 2018</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={styles.boxTextWhiteHeading}>Approved</Text>
                </View>
            </View>

            <View style={{padding: 5}}>
              <Text style={styles.boxTextWhiteHeading}>Reason: Family Function</Text>
              <Text style={styles.boxTextWhiteHeading}>Application Date: 20 Feb 2018</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5}}>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Leave Type</Text>
                <Text style={styles.boxTextWhite}>Full Day</Text>
                
              </View>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Leave Count</Text>
                <Text style={styles.boxTextWhite}>1</Text>

              </View>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Backup Plan</Text>
                <Text style={styles.boxTextWhite}>Akshay Seth</Text>
              </View>
            </View>

          </View>
          <View style={styles.box}>
            <View style={{flexDirection: 'row', padding: 5}}>
                <View style={{flex: 1}}>
                  <Text style={styles.boxTextWhiteHeading}>24 Feb 2018</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={styles.boxTextWhiteHeading}>Approved</Text>
                </View>
            </View>

            <View style={{padding: 5}}>
              <Text style={styles.boxTextWhiteHeading}>Reason: Family Function</Text>
              <Text style={styles.boxTextWhiteHeading}>Application Date: 20 Feb 2018</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5}}>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Leave Type</Text>
                <Text style={styles.boxTextWhite}>Full Day</Text>
                
              </View>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Leave Count</Text>
                <Text style={styles.boxTextWhite}>1</Text>

              </View>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.boxTextWhiteHeading}>Backup Plan</Text>
                <Text style={styles.boxTextWhite}>Akshay Seth</Text>
                
              </View>
            </View>

          </View>
          </ScrollView>
        </View>
        <View>
          <Footer historyColor='#d50000' prop={this.props}/>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    width : width,
    borderWidth: 0.5,
    borderColor: '#d50000',
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: '#ff5131',
    padding: 5,
    elevation: 5
  },
  boxTextWhite: {
    color: '#E8E8E8'
  },
  boxTextWhiteHeading : {
    color: '#F0F0F0',
    fontWeight: 'bold'
  }
})
