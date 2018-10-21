import { createStackNavigator } from 'react-navigation';
import Home from './Screens/Home';
import BuyScreen from './Screens/BuyScreen';
import QRScreen from './Screens/QRScreen';


const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    BuyScreen: {screen: BuyScreen},
    QRScreen:{screen: QRScreen},
},{ headerMode: 'none'})


export default AppNavigator;