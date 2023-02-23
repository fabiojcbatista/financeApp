import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
    return (
        <><View style={styles.containerLogo}>
            <Image
                source={require('../../assets/logo.png')}
                style={{ width: '100%' }}
                resizeMode="contain" />
        </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Monitore, organize seus gastos!</Text>
                <Text style={styles.text}>Faça o login!</Text>

                <TouchableOpacity>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        position: 'absolute',
        backgroundColor: ''
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#a1a1a1'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    }
})