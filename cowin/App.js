import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import UserDetails from './src/userDetails.js';
import Admin from './src/Admin.js';

const App = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     padding : 20,
    //   }}>
    //     <View style ={{
    //         height: 120,
    //         width : "100%",
    //         elevation :50,
    //         marginTop : 20,
    //         justifyContent: "center",
    //         backgroundColor : "#C0C0C0",
    //         alignItems: "center"
            
    //     }}> 
    //     <Text style = {{fontSize : 18}}>Welcome to Vaccine Registration App</Text>
    //     </View>

    //     <TouchableOpacity style = {{
    //     height: 100,
    //     width : "100%",
    //     elevation :50,
    //     marginTop : 20,
    //     justifyContent: "center",
    //     backgroundColor : "#C0C0C0",
    //     alignItems: "center"}}>
    //         <Text style = {{fontSize: 18}}>User</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity style = {{
    //     height: 100,
    //     width : "100%",
    //     elevation :50,
    //     marginTop : 20,
    //     justifyContent: "center",
    //     backgroundColor : "#C0C0C0",
    //     alignItems: "center"}}>
    //         <Text style = {{fontSize : 18}}>Admin</Text>
    //     </TouchableOpacity>
    // </View>
    
    <UserDetails/>

  )
}
export default App;