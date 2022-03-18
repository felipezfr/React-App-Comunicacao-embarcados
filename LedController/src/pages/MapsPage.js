import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, PermissionsAndroid, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
import * as firebase from 'firebase'
import 'firebase/firestore'
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

export default class MapsPage extends React.Component {

    async componentDidMount() {
        if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization('always');
        }
        else {
            this.state.granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Permissão de Localização',
                    message: 'A aplicação precisa da permissção de localização.'
                },
            )
        }
        this.setCurrentPosition()
        this.setPinLed()


    }

    setPinLed() {

        var db = firebase.database();
        db.ref('/users/LED/-MaaCOeKe7_weSeGdK_i').once('value', snapshot => {

            //var data = querySnapShot.val() ? querySnapShot.val() : {};

            var dataDb = snapshot.val();
            console.log(dataDb)

            this.setState({
                positionLed: {
                    latitude: dataDb.latitude,
                    longitude: dataDb.longitude,
                    latitudeDelta: 0.10,
                    longitudeDelta: 0.02
                },
            });

        })

    }

    setCurrentPosition() {
        console.log(this.state.positionLed)
        console.log("teste")
        let getPosition = true;

        if (Platform.OS === "android") {
            if (this.state.granted === PermissionsAndroid.RESULTS.GRANTED) {
                getPosition = true;
            }
            else {
                getPosition = false
                Alert.alert("Permissão de localização não concedida")
            }
        }

        if (getPosition)
            Geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords
                    this.setState({
                        position: {
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.10,
                            longitudeDelta: 0.02,
                        },
                    })
                },
                error => {
                    console.log(error.code, error.message)
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            )
    }

    constructor(props) {
        super(props)
        this.state = {
            // position: {
            //     latitude: -19.973907,
            //     longitude: -60.194862,
            //     latitudeDelta: 0.10,
            //     longitudeDelta: 0.02
            // },
            granted: null,
            positionLed: {
                latitude: -19.973907,
                longitude: -60.194862,
                latitudeDelta: 0.10,
                longitudeDelta: 0.02
            },

        }
    }

    render() {
        return (
            <View style={styles.container} >
                <MapView
                    style={styles.map}
                    region={this.state.position} >
                    <Marker coordinate={this.state.positionLed}
                        title={'Fita Quarto'}
                        description={'A Fita Led Quarto esta localizada aqui'} />

                </MapView>

                {/* <View style={styles.box}>
                    <Text style={styles.boxTitle}> Sua localização</Text>
                    <View>
                        <Text style={{ fontSize: 16 }}>Latitude</Text>
                        <Text style={{ fontSize: 16 }}>{this.state.position.latitude}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}>Longitude</Text>
                        <Text style={{ fontSize: 16 }}>{this.state.position.longitude}</Text>
                    </View>
                </View> */}

                <TouchableOpacity style={styles.button} onPress={() => { this.setCurrentPosition() }}>
                    <Icon name="my-location" color={'#fff'} size={30} />

                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    map: {
        height: '100%',
        width: '100%'

    },
    box: {
        backgroundColor: '#e74c3c',
        borderRadius: 20,
        opacity: 0.75,
        marginTop: -170,
        marginHorizontal: 40,
        padding: 25,
        shadowColor: '#000',
        elevation: 5
    },
    boxTitle: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    boxLatLon: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        backgroundColor: '#e74c3c',
        borderRadius: 150,
        marginTop: -50,
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 8
    }
})
