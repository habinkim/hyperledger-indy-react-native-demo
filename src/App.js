import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import indy from 'indy-sdk-react-native';

const App = () => {
    // indy.createPoolLedgerConfig('')
    let wallet = indy.createWallet({id: 'wallet-123'}, {key: 'key'});
    console.log('wallet = ' + wallet);
    // let wh = indy.openWallet({id: 'wallet-123'}, {key: 'key'});
    // indy.closeWallet(wh);
    indy.deleteWallet({id: 'wallet-123'}, {key: 'key'});
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My First React Native</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
    },
});

export default App;
