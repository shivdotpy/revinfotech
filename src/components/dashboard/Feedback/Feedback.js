import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, TextInput, ScrollView, TouchableOpacity, Keyboard } from 'react-native'

// Header and Footer
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

export default class Feedback extends Component {

    constructor (props) {
        super(props);

        this.state = {
            showFooter : true
        };

        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
    }


    static navigationOptions = { header: null };

    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow () {
        this.setState({showFooter: false});
        // alert('Keyboard Shown');
    }

    _keyboardDidHide () {
        this.setState({showFooter: true});
        // alert('Keyboard Hidden');
    }


    render() {
        return (
        <View style={{flex: 1}}>
            <StatusBar
            backgroundColor="#d50000"
            barStyle="light-content"
            />
            <View>
                <Header name="Feedback" prop={this.props}/>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView showsVerticalScrollIndicator= {false}>
                    <View style={styles.card}>
                        <Text style={styles.cardTextTitle}>Name</Text>
                        <Text style={styles.cardTextContent}>Shiv Shankar Sharma</Text>
                        <Text style={styles.cardTextTitle}>Email</Text>
                        <Text style={styles.cardTextContent}>shiv@revinfotech.com</Text>
                        {/* <Text style={styles.cardTextTitle}>Feedback Title</Text>
                        <TextInput style={styles.input}></TextInput> */}
                        <Text style={styles.cardTextTitle}>Feedback</Text>
                        <TextInput style={styles.input} multiline = {true} numberOfLines = {4} />
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: 'black', fontWeight: '800', fontSize: 15}}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
            {this.state.showFooter ?
            <View>
                <Footer feedbackColor='#d50000' prop={this.props}/>
            </View> : null }
        </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 30,
        width: 400,
        borderRadius: 1,
        marginTop: 10
    },
    cardTextTitle: {
        color: 'black',
        fontWeight: '800',
        fontSize: 15,
        marginBottom: 5
    },
    cardTextContent: {
        fontWeight: '400',
        fontSize: 14,
        marginBottom: 20
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#ccc',
        marginBottom: 5,
        borderRadius: 3,
        padding: 5,
        alignItems: 'flex-start'
    },
    button: {
        marginVertical: 10,
        backgroundColor: '#ff5131',
        padding: 10,
        borderRadius: 3
    }
})
