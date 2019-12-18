import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
       firebase.initializeApp({
            apiKey: 'AIzaSyBHuzB6GRTGk_uLHlelz9QiWJYUvUTq8Wg',
            authDomain: 'auth-6a5d4.firebaseapp.com',
            databaseURL: 'https://auth-6a5d4.firebaseio.com',
            projectId: 'auth-6a5d4',
            storageBucket: 'auth-6a5d4.appspot.com',
            messagingSenderId: '140467179871'
          });

          firebase.auth().onAuthStateChanged((user) => { 
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
          });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                
                <Spinner size={"large"}/>
                    
                );
        }
    }

    render() {
        return (
            <View
            style = {
                { flex:1 }
            }
            >
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}



export default App;
