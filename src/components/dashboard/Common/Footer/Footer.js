import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Icon} from 'react-native-elements';

export default class Footer extends Component {
  render() {

    let applycolor = '#000000'
    let historycolor = '#000000'
    let announcementcolor = '#000000'
    let notificationcolor = '#000000'
    let feedbackcolor = '#000000'


    if (this.props.applyColor) {
       applycolor = this.props.applyColor 
    } 
    
    else if (this.props.historyColor) {
        historycolor = this.props.historyColor
    }
    
    else if (this.props.announcementColor) {
        announcementcolor = this.props.announcementColor
    }
    
    else if (this.props.notificationColor) {
        notificationcolor = this.props.notificationColor
    }
    
    else if (this.props.feedbackColor) {
        feedbackcolor = this.props.feedbackColor
    }

    return (
      <View style={styles.container}>
        <View>
            <Icon name="home" size={25} color={applycolor} />
            {/* <Text style={{fontSize: 10}}>Home</Text> */}
        </View>
        <View>
            <Icon name="history" size={25} type="material-icons" color={historycolor}/>
            {/* <Text style={{fontSize: 10}}>History</Text> */}
        </View>
        <View>
            <Icon name="announcement" size={25} type="material-icons" color={announcementcolor}/>
            {/* <Text style={{fontSize: 10}}>Announcement</Text> */}
        </View>
        <View>
            <Icon name="notifications" size={25} type="material-icons" color={notificationcolor}/>
            {/* <Text style={{fontSize: 10}}>Notification</Text> */}
        </View>
        <View>
            <Icon name="pencil" size={25} type="material-community" color={feedbackcolor}/>
            {/* <Text style={{fontSize: 10}}>Feedback</Text> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#cccccc'
    }
})
