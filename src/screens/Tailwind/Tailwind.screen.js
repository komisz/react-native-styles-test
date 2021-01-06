import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { tailwind } from 'tailwind'

import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'

function TopMenu() {
  return (
    <View
      style={tailwind(
        'z-10 left-0 h-nav w-full flex-row items-center justify-between px-6 bg-white'
      )}>
      <Text>hambi</Text>
      <Text>3pont</Text>
    </View>
  )
}

function ContentSpacer() {
  return (
    <View style={tailwind('h-nav')}>
      <Text>spacer</Text>
    </View>
  )
}

function AvatarContent() {
  return (
    <View style={tailwind('w-full px-6 h-1/3 bg-grey-light')}>
      <Text>Avatar content</Text>
    </View>
  )
}

function MainContent() {
  return (
    <View style={tailwind('w-full px-6 h-2/3 bg-black')}>
      <Text>Main content</Text>
    </View>
  )
}

const Tailwind = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <View style={tailwind('bg-blue-light h-full z-0')}>
        <SafeAreaView />
        <TopMenu />
      </View>
      <ScrollView
        contentContainerStyle={tailwind('items-center h-full')}
        style={tailwind('absolute top-0 left-0 w-full h-full bg-transparent')}>
        <SafeAreaView />
        <ContentSpacer />
        <AvatarContent />
        <MainContent />
      </ScrollView>
    </>
  )
}

export default Tailwind
