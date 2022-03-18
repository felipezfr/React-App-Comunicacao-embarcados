import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'

export default class BluePage extends React.Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../img/background.png')}
                    style={styles.bgImage}
                    resizeMode="cover">
                        
                    <View style={[styles.section, styles.sectionLarge]}>
                        <Text>BluePage</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10
    },
    bgImage: {
        flex: 1,
        marginHorizontal: -20
    },
    textPoint: {
        color: 'white',
        fontSize: 80,
    },
    section: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionLage: {
        flex: 4,
        justifyContent: 'space-around',
    },
})
