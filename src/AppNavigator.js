import { createStackNavigator } from 'react-navigation';
import Home from './Screens/Home';
import Coffee from './Screens/BuyScreen';


const AppNavigator = createStackNavigator({

    Home: {screen: Home},
    Coffee: {screen: Coffee},


},{ headerMode: 'none'})


export default AppNavigator;