import {createSwitchNavigator, createAppContainer } from 'react-navigation';

// Components
import Main from './views/Main';
import Box from './views/Box';

const AppNavigator = createSwitchNavigator({
    Main, Box 
});

export default createAppContainer(AppNavigator);
