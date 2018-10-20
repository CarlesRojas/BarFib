import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView,
    Dimensions
} from 'react-native';
import Header from "../components/Header";
import InfoPanel from "../components/InfoPanel";
import BuyButton from "../components/BuyButton";
import Subscription from "../components/Subscription";

export default class BuyScreen extends React.Component {
    navigate = (destiny) => {
        this.props.navigation.navigate(destiny);
    }
    select = () =>{

    }

    render() {
        return (
            <ImageBackground
                source = {require('../Img/coffee_bg.png')}
                style={styles.container}>

                <Header topImg={require('../Img/coffee.png')}/>

                <View style={styles.infoContainer}>
                    <InfoPanel amplada={'85%'} onPress={() => {this.navigate('Home')}} ar={1210/400} name={'Coffee'} price={'1.10 €'}/>
                </View>

                <View style={styles.buyContainer}>
                    <BuyButton amplada={'50%'} ar={1210/400}/>
                </View>

                <View style={styles.subsContainer}>
                    <Subscription amplada={'90%'} ar={1210/220} infoSub={'1 coffee/day   25€/month'}/>
                    <Subscription amplada={'90%'} ar={1210/220} infoSub={'5 coffees/week   5€/week'}/>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:  '100%',
        height: '100%',
    },
    infoContainer: {
        alignItems:'center',
        elevation: 10,
        position: 'absolute',
        top: '25%',
        width: '100%',
        height: '30%',
    },
    buyContainer: {
        marginTop:'25%',
        marginBottom:'5%',
        alignItems:'center',
        width: '100%',
    },
    subsContainer: {
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent:'flex-end'
    }
});