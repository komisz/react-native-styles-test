import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'
import { getColor } from 'tailwind'
import styles from '../Home/Home.style'

import Icon from 'react-native-vector-icons/Ionicons'

const Tailwind = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={'white flex-none'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon
            name={'bandage-outline'}
            size={100}
            color={getColor('blue-dark')}
          />
          <View>
            <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
              <Text style={styles.text}>
                this is{' '}
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: getColor('blue-light')
                  }}>
                  {' '}
                  TAILWIND{' '}
                </Text>{' '}
                screen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Tailwind
