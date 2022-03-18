import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase'
import 'firebase/firestore'

export default function ColorPage({ navigation }) {

    function updateDb(userId) {

        var db = firebase.database();

        db.ref('/users/LED/' + userId)
            .update({
                color: color,
                on: on
            })
            .then(() => console.log('Data updated.'));
    }

    // Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {
        updateDb('-MaaCOeKe7_weSeGdK_i')
        console.log(color)
    });

    const [color, setColor] = useState('#ffffff');
    const [on, setOn] = useState(true);

    function Led() {

        if (on == true) {
            return (<IconCommunity name="led-on" color={color} size={100} style={styles.led} />)
        }
        else if (on == false) {
            return (<IconCommunity name="led-variant-off" color={"#fff"} size={100} style={styles.led} />)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Fita Quarto</Text>
                <View >
                    <ColorPicker style={styles.picker}
                        // ref={r => { this.picker = r }}
                        // color={this.state.currentColor}
                        // swatchesOnly={this.state.swatchesOnly}
                        onColorChange={setColor}
                        // onColorChangeComplete={this.onColorChangeComplete}
                        thumbSize={30}
                        sliderSize={30}
                        noSnap={true}
                        row={false}
                    // swatchesLast={this.state.swatchesLast}
                    // swatches={this.state.swatchesEnabled}
                    // discrete={this.state.disc}
                    />
                </View>
            </View>
            <View style={styles.btns}>
                <View style={styles.btnOff}>
                    <IconCommunity name="led-variant-on" color={"#fff"} size={30} onPress={() => setOn(true)} />
                    <Button
                        title='Ligar fita'
                        color="#7a7a7a"
                        onPress={() => setOn(true)}
                    />
                </View>
                <View style={styles.btnOff}>
                    <IconCommunity name="led-variant-off" color={"#fff"} size={30} onPress={() => setOn(false)} />
                    <Button
                        title='Desligar fita'
                        color="#7a7a7a"
                        onPress={() => setOn(false)}
                    />
                </View>
            </View>
            <Led />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303030',
        flex: 1,
        height: 4,
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        marginBottom: 60
    },
    led: {
        textAlign: "center",
    },
    picker: {
        flex: 1,
        alignItems: 'center',
    },
    btns: {
        borderRadius: 30,
        marginTop: 30,
        backgroundColor: '#7a7a7a',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        alignSelf: 'stretch',
        margin: 20,
    },
    btnOff: {
        borderRadius: 30,
        width: 190,
        backgroundColor: '#7a7a7a',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        alignSelf: 'flex-start',
    },

});
