import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';

import MenuButton from '../components/MenuButton'
import {connect} from 'react-redux'
import {fetchProducts} from "../actions/homeActions";
import {IMAGES_HEADER} from "../constants";
import TodayOrder from "../components/TodayOrder";

const mockImage = require('../Img/coffee.png')

class Home extends React.Component {
    componentWillMount() {
        this.props.fetchProducts()
    }

    navigate = (destiny, params) => {
        console.log(params);
        this.props.navigation.navigate(destiny, params);
    }
    render() {
        return (
            <ImageBackground
                source={require('../Img/bg2.jpg')}
                style={styles.container}>

                <ScrollView>
                    <View style={styles.menuContainer}>
                        <Image source={require('../Img/BarFib.png')} style={styles.logo}/>
                        {
                            this.props.products.map((product) => {
                                return (
                                    <MenuButton key={`product_${product.id}`} itemImage={IMAGES_HEADER[product.id]} amplada={product.day?'100%':'50%'} onPress={() => {
                                        this.navigate('BuyScreen', product)
                                    }} ar={product.day?1210 / 617:1} name={product.day? 'daily special:'+product.name: product.name}/>

                                )
                            })
                        }

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
const mapStateToProps = (state) => {
    return {
        products: state.home.products
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchProducts: ()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)