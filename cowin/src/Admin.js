import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';

const Admin = () => {
    const modalVisible = false;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
            <Text>Enter User's details</Text>

            <Text>Name :</Text>
            <TextInput
            style={styles.input}
            />
            <Text>Phone Number :</Text>
            <TextInput
            style={styles.input}
            />
            <Text>Addhar Number :</Text>
            <TextInput
            style={styles.input}
            />

            <Text>Check Status</Text>
            <Text>Vaccinated</Text>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                </View>
                </View>
            </Modal>
    </View>

  )
}

const styles = StyleSheet.create({
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
export default Admin;