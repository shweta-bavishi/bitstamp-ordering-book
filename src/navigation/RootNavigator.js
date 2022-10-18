import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeContext} from '../theme';
import {
  NAVIGATION_TO_LOGIN_SCREEN,
  NAVIGATION_TO_DASHBOARD_SCREEN,
} from './routes';
import {LoginScreen, DashboardScreen} from '../screens';
import {LogoutComponent} from '../components';

const Stack = createNativeStackNavigator();

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: theme.appbar.backgroundColor,
          },
          headerBackTitle: null,
          headerTintColor: theme.appbar.statusBarColor,
          headerLeft: null,
        })}>
        <Stack.Screen
          name={NAVIGATION_TO_LOGIN_SCREEN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={NAVIGATION_TO_DASHBOARD_SCREEN}
          component={DashboardScreen}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerRight: () => <LogoutComponent navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
