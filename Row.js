import React from 'react'
import {StyleSheet, Text, View, Image } from 'react-native'

const Row = props => (
        <View style={styles.row}>
            <Image
                style={styles.image}
                source={{uri: `${props.poster}`}}
            />
            <View style={{flexDirection:'column'}}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.year}>{props.year}</Text>
            </View>
        </View>
);

const styles = StyleSheet.create({
    row: {
        padding: 20,
        flexDirection: 'row',
        width: '75%',
        alignContent: 'center',
    },
    image: {
        marginRight: 10,
        width: 75,
        height: 75,
    },
    title: {
        fontSize: 16,
        marginRight: 10
    },
    year: {
        fontSize: 10,
        marginTop: 10
    },
});

export default Row