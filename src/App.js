import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigator from './navigation/RootNavigator';
import configureStore from './store';
import {ThemeProvider, lightTheme, darkTheme} from './theme';

const store = configureStore();
const App = () => {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
