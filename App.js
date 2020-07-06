import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Location from './components/location';


export default function App() {
  getUserLocationHandler = () =>{
    console.log('Pressed Button')
  }


  return (
    <View style={styles.container}>
      <Location onGetLocation={this.getUserLocationHandler}/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 36,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
