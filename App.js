//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-scanner'

// create a component
export default class App extends Component {

  ifScaned= e => {
    Linking.openURL(e.data).catch(err => 
      Alert.alert("Invalid QRCode ", e.data))
      
  }

  render() {
    return (
     <QRCode
     containerStyle={{backgroundColor:'white', marginBottom: "20%"}}
     onRead={this.ifScaned}
     reactivate={true}
     permissionDialogMessage="Need permission to Access QR Camera"
     reactivateTimeout={10}
     showMarker={true}
     markerStyle={{borderColor:'white', borderRight:10}}
     bottomContent={
       <TouchableOpacity>
         <Text style={{fontSize:21, color:'green'}}>Scan QR</Text>
       </TouchableOpacity>
     }
     />
    );
  }
}