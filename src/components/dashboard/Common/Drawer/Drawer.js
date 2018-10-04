import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Drawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center', paddingVertical: 20}}>
                    <Image source={require('../../../../assets/user.png')} style={{height: 120, width: 120}}/>
                    <Text style={{fontWeight: 'bold', marginVertical: 5}}>Shiv Shankar Sharma</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width - 100,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#ffffff'
    }
});