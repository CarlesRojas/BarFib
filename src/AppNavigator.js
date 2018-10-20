import { createStackNavigator } from 'react-navigation';
import Home from './Screens/Home';
import Coffee from './Screens/BuyScreen';


const AppNavigator = createStackNavigator({
    Coffee: {screen: Coffee},
    Home: {screen: Home},

},{ headerMode: 'none'})


export default AppNavigator;