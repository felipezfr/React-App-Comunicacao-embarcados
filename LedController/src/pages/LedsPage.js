import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput, Button, Modal, View, Pressable, Alert } from 'react-native';
import FitasList from '../components/FitasList';
import LedsList from '../components/LedsList';
import habitosJson from '../../habitos.json';
import * as firebase from 'firebase'
import 'firebase/firestore'


export default class LedsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      habitos: [],
      modalVisible: false,
      newLedName: "",
      qtdLeds: "",
      dataLeds: [],
    }
  }

  // addHabito() {
  //   var db = firebase.database();
  //   db.ref('/users/habitos').push({ desc: "Caminhar" })
  //     .then(() => { console.log('Inserido com sucesso') })
  //     .catch(() => { console.log('ERRO') });
  // }

  addNewLed() {

    const { newLedName, qtdLeds } = this.state;

    console.log(newLedName + qtdLeds)

    var db = firebase.database();
    db.ref('/users/LED').push({
      name: newLedName,
      qtd: qtdLeds,
      color: '#FFFFFF',
      on: true,
      latitude: '',
      longitude: '',
    })
      .then(() => {
        console.log('Inserido com sucesso')
        this.getLedsFirebase()
      })
      .catch(() => { console.log('ERRO') });

    this.setModalVisible(false)
  }

  onChageHandler(field, value) {
    this.setState({ [field]: value });
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  getLedsFirebase() {

    var dataDb = []
    var db = firebase.database();
    db.ref('/users/LED').once('value', snapshot => {

      //var data = querySnapShot.val() ? querySnapShot.val() : {};
      dataDb = Object.values(snapshot.val());
      this.setState({
        dataLeds: dataDb,
      });
    })

  }

  componentDidMount() {

    console.log("componentDidMount");
    this.getLedsFirebase();

    this.setState({
      habitos: habitosJson
    });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Fitas de led</Text>

        <Button title='Adicionar Fita LED'
          onPress={() => this.setModalVisible(true)}
        />

        <View style={styles.centeredView}>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Adicionar Fita LED</Text>

                <Text >Nome da nova Fita LED</Text>
                <TextInput
                  placeholder="Nome"
                  value={this.state.newLedName}
                  onChangeText={value => this.onChageHandler('newLedName', value)}
                />

                <Text >Quantidade de LEDs</Text>
                <TextInput
                  placeholder="Quantidade"
                  keyboardType="numeric"
                  value={this.state.qtdLeds}
                  onChangeText={value => this.onChageHandler('qtdLeds', value)}
                />


                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => this.addNewLed()}
                >
                  <Text style={styles.textStyle}>Adicionar</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        </View>


        <ScrollView style={styles.fitas}>

          {/* <FitasList fitas={this.state.habitos} /> */}
          <FitasList fitas={this.state.dataLeds} />
          {/* <LedsList leds={this.state.dataLeds} /> */}
        </ScrollView>
      </View >
    );
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303030',
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  fitas: {
    flex: 1,
    marginTop: -300
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    flex: 0.85,
    alignItems: 'center',
    height: 40,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    flexDirection: "row",

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});