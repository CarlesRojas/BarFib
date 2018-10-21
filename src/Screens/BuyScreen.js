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
import {connect} from 'react-redux'
import {fetchProduct} from "../actions/homeActions";
import {IMAGES_HEADER} from "../constants";

class BuyScreen extends React.Component {
    navigate = (destiny) => {
        this.props.navigation.navigate(destiny);
    }

    render() {

        const productName = this.props.product.day? 'daily special': this.props.product.name
        const productPriceMonth = this.props.product.price * 20
        const productPriceDay = this.props.product.price * 4
        return (

            <ImageBackground
                source = {require('../Img/coffee_bg.png')}
                style={styles.container}>

                <Header topImg={IMAGES_HEADER[this.props.product.id]}/>

                <View style={styles.infoContainer}>
                    <InfoPanel amplada={'85%'} onPress={() => {this.navigate('Home')}} ar={1210/400}  name={this.props.product.day? 'plat del dia:'+this.props.product.name: this.props.product.name}
                               price={this.props.product ? this.props.product.price+'€' : ''}/>
                </View>

                <View style={styles.buyContainer}>
                    <BuyButton amplada={'50%'} ar={1210/400}/>
                </View>


                <View style={styles.subsContainer}>
                    <Subscription amplada={'90%'} ar={1210/220} infoSub={'1 '+productName+'/day   '+productPriceMonth+'€/month'}/>
                    <Subscription amplada={'90%'} ar={1210/220} infoSub={'5 '+productName+'/week   '+productPriceDay+'€/week'}/>
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
const mapStateToProps = (state, ownProps) => {
    return {
        product: ownProps.navigation.state.params
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyScreen)