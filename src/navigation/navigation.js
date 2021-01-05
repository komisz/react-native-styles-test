import React from 'react'
import Home from '../screens/Home/Home.screen'
import Emotion from '../screens/Emotion/Emotion.screen'
import Tailwind from '../screens/Tailwind/Tailwind.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="RNStock"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-home'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Tailwind"
        component={Tailwind}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'bandage-outline'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Emotion"
        component={Emotion}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'heart-outline'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
