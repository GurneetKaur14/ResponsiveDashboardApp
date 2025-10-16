//Import React
import React from 'react';

//Import StatusBar component
import {StatusBar} from 'react-native';

//Import the main Dashboard screen
import DashboardScreen from './src/screens/DashboardScreen';

//App component
const App = () => {
return (
<>
<StatusBar barStyle="light-content" backgroundColor="#3498db" />
<DashboardScreen />
</>
);
};

// Export the App component as the default export
export default App;