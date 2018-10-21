import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';

import MenuButton from'../components/MenuButton'
import Subscription from "../components/Subscription";
import TodayOrder from "../components/TodayOrder";

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

                        <MenuButton itemImage={require('../Img/pizza.png')} amplada={'100%'} onPress={() => {this.navigate('Coffee',1)}} ar={1210/617} name={'Plat del dia: Pizza'}/>
                        <MenuButton itemImage={require('../Img/coffee.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',2)}} ar={1} name={'Café'}/>
                        <MenuButton itemImage={require('../Img/beer.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',3)}} ar={1} name={'Cervesa'}/>
                        <MenuButton itemImage={require('../Img/braves.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',4)}} ar={1} name={'Braves'}/>
                        <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee',5)}} ar={1} name={'FiberBurger'}/>

                    </View>

                    <View style={styles.todayList}>
                        <Text style={styles.subtitle}> Today's Orders: </Text>
                        <TodayOrder amplada={'95%'} ar={1210/220} infoSub={'1 coffee' } onPress={() => {this.props.navigation.navigate('QRScreen')}}/>
                        <TodayOrder amplada={'95%'} ar={1210/220} infoSub={'1 FiberBurger'} onPress={() => {this.props.navigation.navigate('QRScreen')}}/>
                    </View>



                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:  '100%',
        backgroundColor: 'transparent',
    },
    menuContainer: {
        width: '100%',
        paddingLeft: 10,
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    logo:{
        width: '100%',
        height: 90
    },
    subtitle:{
        textAlign: 'center',
        textDecorationLine: 'underline',
        paddingBottom: 20,
        fontSize: 28,
        color: 'white'
    },
    todayList:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
});
