import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LedsPage from './src/pages/LedsPage';
import LoginPage from './src/pages/LoginPage';
import ColorPage from './src/pages/ColorPage';
import HomeTabs from './src/pages/HomeTabs';
import MapsPage from './src/pages/MapsPage';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login"
        component={LoginPage}
        options={{
          headerShown: false
        }}
      />
      {/* <Stack.Screen name="ColorPage" component={ColorPage} /> */}
      {/* <Stack.Screen name="Leds" component={LedsPage} />
      <Stack.Screen name="Color" component={ColorPage} />
      <Stack.Screen name="Mapa" component={MapsPage} /> */}
      < Stack.Screen name="HomeTabs"
        component={HomeTabs}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import LedsPage from './src/pages/LedsPage';
// import LoginPage from './src/pages/LoginPage';
// import ColorPage from './src/pages/ColorPage';

// const appNavigator = createStackNavigator(
//   {

//     'Login': {
//       screen: LoginPage,
//       navigationOptions: {
//         headerShown: false,
//       }
//     },
    // 'Fitas': {
    //   screen: LedsPage,
    //   navigationOptions: {
    //     title: 'Controle Fita LED',
    //     headerTitleStyle: {
    //       textAlign: 'left',
    //       fontSize: 20,
    //     }
    //   }
    // },
    // 'ColorLed': {
    //   screen: ColorPage,
    //   navigationOptions: {
    //     title: 'Cores Fita LED',
    //     headerTitleStyle: {
    //       textAlign: 'left',
    //       fontSize: 20,
    //     }
    //   }
    // },


  // },
  // {
  //   defaultNavigationOptions: {
  //     title: 'Controle Fita LED',
  //     headerTintColor: 'white',
  //     headerStyle: {
  //       backgroundColor: '#6542f4',
  //       borderBottomColor: '#f4f2ff',
  //     },
  //     headerTitleStyle: {
  //       color: 'white',
  //       fontSize: 20,
  //       flexGrow: 1,
  //       textAlign: 'center',
  //     }
  //   }
  // }
// );

// const AppContainer = createAppContainer(appNavigator);

// export default AppContainer;




