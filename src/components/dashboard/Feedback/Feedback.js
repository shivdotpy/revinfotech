import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native'


// Header and Footer
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

export default class Feedback extends Component {

    static navigationOptions = { header: null }
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
                        <TextInput style={styles.input}></TextInput>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: 'black', fontWeight: '800', fontSize: 15}}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
            <View>
                <Footer feedbackColor='#d50000' prop={this.props}/>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 30,
        borderColor: 'grey',
        borderWidth: 0.7,
        width: 400,
        elevation: 1,
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
        height: 100
    },
    button: {
        marginVertical: 10,
        backgroundColor: '#ff5131',
        padding: 10,
        borderRadius: 3
    }
})
