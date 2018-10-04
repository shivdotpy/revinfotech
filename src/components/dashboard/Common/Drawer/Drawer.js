import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Drawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{alignItems: 'flex-end', padding: 15}} onPress={this.props.closeDrawer}>
                    <Icon name="arrow-left-circle" type="feather" color="#ff5131" size={30}/>
                </TouchableOpacity>
                <View style={{alignItems: 'center', paddingVertical: 20}}>
                    <Image source={require('../../../../assets/user.png')} style={{height: 120, width: 120}}/>
                    <Text style={{fontWeight: 'bold', marginTop: 20}}>Shiv Shankar Sharma</Text>
                    <Text>Emp ID: 27</Text>
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