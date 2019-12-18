import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';


class LoginForm extends Component {
    // eslint-disable-next-line no-undef
    state = { email: '', password: '', error: '', loading: false } ;

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this)).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }
    onLoginFail() {
        this.setState({
            loading: false,
            error: 'Authentication failed'
        });
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    render() {
        return (
            <Card>
                <CardSection>
                   <Input
                   label="Email"
                   value={this.state.email}
                   onChangeText={email => this.setState({ email })}
                   placeholder="user@gmail.com"
                   />
                </CardSection>

                <CardSection>
                <Input
                   label="Password"
                   value={this.state.password}
                   onChangeText={password => this.setState({ password })}
                   placeholder="password"
                   secureTextEntry
                />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>

        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
