import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';

import MenuItem from'./src/components/MenuItem'
import MenuButton from'./src/components/MenuButton'
export default class App extends React.Component {
  render() {
    return (
     <ImageBackground
          source = {require('./src/Img/2.png')}
          style={styles.container}>

          <View style={styles.overlayContainer}>
              <View style={styles.top}>
                  <Text style={styles.header}>BARFIB</Text>
              </View>

              <View style={styles.menuContainer}>
                  <MenuButton itemImage={require('./src/Img/coffee.jpg')}  amplada={'100%'}/>
                  <MenuButton itemImage={require('./src/Img/coffee.jpg')}  amplada={'50%'}/>
                  <MenuButton itemImage={require('./src/Img/coffee.jpg')}  amplada={'50%'}/>
                  <MenuButton itemImage={require('./src/Img/coffee.jpg')}  amplada={'50%'}/>
                  <MenuButton itemImage={require('./src/Img/coffee.jpg')}  amplada={'50%'}/>

              </View>

          </View>
     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width:  '100%',
    height: '100%',

  },
    overlayContainer: {
      flex: 1,
        backgroundColor: 'rgba(47,163,218, .4)'
    },
    top: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,.1)'
    },

    menuContainer: {
        height: '75%',
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
