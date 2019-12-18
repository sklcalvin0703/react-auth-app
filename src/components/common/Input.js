import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder} 
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText} 
            />
        </View>
    );
};

const styles = {
    labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 // 1/3 of the view
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 18,
        fontSize: 18,
        lineHeight: 23,
        flex: 2 // 2/3 of the view
    },
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'

    }
};

export { Input };