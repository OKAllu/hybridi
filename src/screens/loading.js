import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <View style={[styles.window, styles.wrapper]}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text style={styles.content}>loading</Text>
            </View>
        </View>
    );
}; 

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        justifyContent: 'center',
        flex: 1
    },
    window: {
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    content: {
        padding: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f1f1f1',
        justifyContent: 'center',
        textAlign: 'center'
    }
})

export default Loading;