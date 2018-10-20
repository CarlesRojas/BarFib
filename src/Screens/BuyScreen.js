import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground, ScrollView, Dimensions
} from 'react-native';
import Header from "../components/Header";
import InfoPanel from "../components/InfoPanel";
import BuyButton from "../components/BuyButton";
import {connect} from 'react-redux'
import {fetchProduct} from "../actions/buyActions";

class BuyScreen extends React.Component {
    componentWillMount(){
        this.props.fetchProduct(this.props.id)

    }
    navigate = (destiny) => {
        this.props.navigation.navigate(destiny);
    }

    render() {
        return (
            <ImageBackground
                source={require('../Img/coffee_bg.png')}
                style={styles.container}>

                <View style={styles.overlayContainer}>

                    <Header topImg={require('../Img/coffee.png')}/>
                    <View style={styles.menuContainer}>
                        <InfoPanel amplada={'85%'} onPress={() => {
                            this.navigate('Home')
                        }} ar={1210 / 400} name={this.props.product ? this.props.product.name : ''}
                                   price={this.props.product ? this.props.product.price : ''}/>
                        <BuyButton amplada={'85%'} ar={1210 / 400}/>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    menuContainer: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '-15%'
    }
});

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        product: state.buy.product,
        id: ownProps.navigation.state.params
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchProduct: (id)=>dispatch(fetchProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyScreen)