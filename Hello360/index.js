import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  
} from 'react-360';

export default class Hello360 extends React.Component {
  render() {
    return (
  <VrButton>
    <Text style={styles.greating} >
       Welcome to space squeezie !!!
    </Text>      
          <View style={styles.greetingBox}>
          <Text >
            Start the expedition now
          </Text>
          </View>
     </VrButton>
     
    ); 
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: 'red',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },

});

AppRegistry.registerComponent('Hello360', () => Hello360);
