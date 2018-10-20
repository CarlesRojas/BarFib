import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default  class MenuItem extends React.Component{
    render(){
        return(
          <View style={[styles.menuItem, {width: this.props.amplada}]}>
              <Image
                  source={this.props.itemImage}
                  style={styles.image} />
          </View>
        );
    }

}


const styles = StyleSheet.create({
    menuItem: {
        height: '33.33333%',
        paddingRight: 10,
        paddingBottom: 10
    },

    image: {
        width: '100%',
        height: '100%'

    }
});