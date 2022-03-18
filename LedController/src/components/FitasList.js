import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function FitasList(props, { navigation }) {

    // function color() {
    //     navigation.navigate('ColorPage');
    // }

    const { fitas } = props;

    console.log("FitasList")
    console.log(fitas)


    const ret = fitas.map(fita => {
        const { name, qtd } = fita;
        var id = 0;
        return (

            <View style={styles.container} key={id++}>
                <Text style={[styles.default, styles.name]}> {name} </Text>
                <Text style={[styles.default, styles.qtd]}> {qtd}</Text>
                <View style={[styles.default, styles.button]}>
                    <Button
                        title='Mudar Cor'
                        color="#303030"
                        // onPress={() => navigation.navigate('ColorPage')}
                    />

                </View>

            </View>
        );
    });



    return (
        <View>
            {ret}
        </View>
    )

};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        // backgroundColor: '#C0C0C0',

    },
    default: {
        flex: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#000',
        backgroundColor: '#C0C0C0',
        borderStyle: 'solid',
        textAlignVertical: 'center',
        height: 60,

    },
    descricao: {
        // flex: 0.1,
        // textAlign: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
        // alignItems: 'center',
        // textAlignVertical: 'center',
        // justifyContent: 'center'
    },
    nome: {
        // flex: 0.9,
    },
    button: {
        // flex: 0.5,

        // alignContent: 'center',
        // alignItems: 'center',        
        // textAlignVertical: 'center',
        // textAlign: 'center',

    }
});

// export default FitasList;