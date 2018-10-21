import { createStackNavigator } from 'react-navigation';
import Home from './Screens/Home';
import Coffee from './Screens/BuyScreen';
import QRScreen from './Screens/QRScreen';


const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    QRScreen:{screen: QRScreen},
    Coffee: {screen: Coffee},
},{ headerMode: 'none'})


export default AppNavigator;663.