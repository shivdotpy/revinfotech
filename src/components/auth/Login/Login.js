import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import {Icon} from 'react-native-elements';


export default class Login extends Component {

    constructor (props) {
        super(props)

        this.state = {
            username : '',
            password: '',
            showUserError: false,
            showPassError: false
        }

        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.login = this.login.bind(this)
    }

    changeUsername = (event) => {
        this.setState({showUserError: false})
        this.setState({username: event})
    }

    changePassword = (event) => {
        this.setState({showPassError: false})
        this.setState({password: event})
    }

    login = () => {

        if (this.state.username == '' && this.state.password == '') {
            this.setState({showUserError: true})
            this.setState({showPassError: true})
            return
        }

        if (this.state.username == '') {
            this.setState({showUserError: true})
            return
        }

        if (this.state.password == '') {
            this.setState({showPassError: true})
            return
        }
        
        console.log(this.state)

        fetch('http://mirrorme.devserver.co.in/api/user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.username, password: this.state.password})
        })
        .then(res => res.json())
        .then(data => {

        })
        .catch(err => console.log(err))


    }

    static navigationOptions = { header: null }
  
    render() {
        return (
            <View style={styles.container}>
                
                    <StatusBar
                        backgroundColor="#9b0000"
                        barStyle="light-content"
                    />
                    <View>
                        <View style={{alignItems: 'center', marginBottom: 20}}>
                        <Text style={{color: '#ffffff', fontSize: 25}}>RevInfotech</Text>
                    </View>
                    
                    <View style={{marginBottom: 15}}>
                        <View style={styles.input}>
                            <Icon name="email" type="material-icons"/>
                            <TextInput placeholder="email" style={styles.inputText} onChangeText={this.changeUsername}/>
                        </View>
                        {this.state.showUserError ? <Text>Username is required !</Text> : null}
                    </View>
                    
                    <View style={{marginBottom: 15}}>
                        <View style={styles.input}>
                            <Icon name="vpn-key" type="material-icon" />
                            <TextInput placeholder="password" style={styles.inputText} onChangeText={this.changePassword} secureTextEntry={true}/>
                        </View>
                        {this.state.showPassError ? <Text>Password is required !</Text> : null }
                        
                    </View>
                    
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={styles.button} onPress={this.login}>
                            <Text style={styles.buttontext}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d50000'
    },
    input: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        width: 280
    },
    inputText: {
        color: '#000000',
        fontSize: 17,
        paddingLeft: 20,
        width: '100%'
    },
    button: {
        backgroundColor: '#9b0000',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 3,
        alignItems: 'center',
        width: '50%',
        marginTop: 10
    },
    buttontext: {
        fontWeight: '500',
        fontSize: 15,
        color: '#ffffff'
    }
})
