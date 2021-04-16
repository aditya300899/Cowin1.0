import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';

const UserDetails = () => {
    const modalVisible = true;
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        padding : 20
      }}>
          <View style={{
                height: 60,
                width : "100%",
                elevation :50,
                marginBottom : 40,
                justifyContent: "center",
                backgroundColor : "#C0C0C0",
                alignItems: "center"
          }}>
            <Text>Enter your details</Text>
          </View>

        <View style ={{
            flexDirection : 'row',
            width : "100%",
            marginBottom : 20
        }}>
            <Text style =  {{fontSize : 14, margin : 10, width : 60}}>Name :</Text>
            <TextInput
            style={{backgroundColor : "#D3D3D3", marginLeft : 20, width : 200}}
            placeholder = "Enter your name"
            />
        </View>

        <View style ={{
            flexDirection : 'row',
            width : "100%",
            marginBottom : 20
        }}>
            <Text style = {{fontSize : 14, margin : 10, width : 60}}>Phone :</Text>
            <TextInput
            style={{backgroundColor : "#D3D3D3", marginLeft : 20, width : 200}}
            placeholder = "Enter your phone Number"
            />
        </View>

        <View style ={{
            flexDirection : 'row',
            width : "100%",
            marginBottom : 20
        }}>
            <Text style =  {{fontSize : 14, margin : 10, width : 60}}>Addhar :</Text>
            <TextInput
            style={{backgroundColor : "#D3D3D3", marginLeft : 20, width : 200}}
            placeholder = "Enter your Addhar"
            />
        </View>


        <View>
            <TouchableOpacity style={{
                height: 30,
                width : 120,
                elevation :50,
                marginVertical : 20,
                justifyContent: "center",
                backgroundColor : "#C0C0C0",
                alignItems: "center"
            }}>
                <Text>Upload XML File</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={{
                height: 30,
                width : 120,
                elevation :50,
                marginVertical : 20,
                justifyContent: "center",
                backgroundColor : "#C0C0C0",
                alignItems: "center"
            }}>
                <Text>Choose Vaccine</Text>
            </TouchableOpacity>
        </View>
            
            

            

            
            {/* <Modal
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
            </Modal> */}

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
export default UserDetails;