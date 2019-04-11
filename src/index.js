import React from 'react';
import Router from './routes';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'  
]);

const App = () => <Router />;

export default App;
