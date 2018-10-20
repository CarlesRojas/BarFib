import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';

import MenuButton from'../components/MenuButton'
export default class Home extends React.Component {

    navigate = (destiny, id) => {
        this.props.navigation.navigate(destiny,id);
    }
    render() {
        return (
            <ImageBackground
                source = {require('../Img/bg2.jpg')}
                style={styles.container}>

                <ScrollView>
                    <View style={styles.menuContainer}>
                        <Image source={require('../Img/BarFib.png')} style={styles.logo}/>
<<<<<<< HEAD
                        <MenuButton itemImage={require('../Img/pizza.png')} amplada={'100%'} onPress={() => {this.navigate('Coffee')}} ar={1210/617} name={'Daily Special: Pizza'}/>
                        <MenuButton itemImage={require('../Img/coffee.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'Coffee'}/>
                        <MenuButton itemImage={require('../Img/beer.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'Beer'}/>
                        <MenuButton itemImage={require('../Img/braves.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'Brabas'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'FiberBurger'}/>
=======
                        <MenuButton itemImage={require('../Img/pizza.png')} amplada={'100%'} onPress={() => {this.navigate('Coffee',1)}} ar={1210/617} name={'Plat del dia: Pizza'}/>
                        <MenuButton itemImage={require('../Img/coffee.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',2)}} ar={1} name={'Café'}/>
                        <MenuButton itemImage={require('../Img/beer.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',3)}} ar={1} name={'Cervesa'}/>
                        <MenuButton itemImage={require('../Img/braves.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',4)}} ar={1} name={'Braves'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',5)}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',5)}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',5)}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',5)}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',5)}} ar={1} name={'FiberBurger'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',5)}} ar={1} name={'FiberBurger'}/>
>>>>>>> master
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:  '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    menuContainer: {
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    logo:{
        width: '100%',
        height: '10%',
    }
});
