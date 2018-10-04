import React, {Component} from 'react'
import {Text, StyleSheet, View, StatusBar, ScrollView, Button, TouchableOpacity, BackHandler, BackAndroid} from 'react-native'

import {Tile} from 'react-native-elements';

// Footer
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import Drawer from "../Common/Drawer/Drawer";


export default class Apply extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showDrawer: false
        }


        this.openDrawer = this.openDrawer.bind(this)
    }

    static navigationOptions = {header: null};



    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }


    handleBackPress = () => {
        if (this.state.showDrawer === true) {
            this.setState({showDrawer: false})
        } else {
            BackAndroid.exitApp()
        }
        return true;
    };

    openDrawer = () => {
        this.setState({showDrawer: true})
    };

    closeDrawer = () => {
        this.setState({showDrawer: false})
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#d50000"
                    barStyle="light-content"
                />
                <View>
                    <Header name="Home" prop={this.props} openDrawer={this.openDrawer}/>
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
                    <TouchableOpacity style={{
                        backgroundColor: '#d50000',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        marginTop: 20,
                        borderRadius: 1
                    }}>
                        <Text>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Footer applyColor='#d50000' prop={this.props}/>
                </View>
                {this.state.showDrawer ?
                    <Drawer closeDrawer={this.closeDrawer}/> : null}
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
