import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Actions() {
    return (
        <SafeAreaView>
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                <Icon name="addfolder" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Entrada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                <Icon name="tagso" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                <Icon name="creditcard" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                <Icon name="barcode" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                <Icon name="setting" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>           
        </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width:60,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32
    },
    labelButton: {

    }
});