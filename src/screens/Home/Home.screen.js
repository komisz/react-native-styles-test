import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-home'} size={100} color={'purple'} />
          <View>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
              <Text style={styles.text}>
                This is{' '}
                <Text style={{ fontWeight: 'bold', color: 'purple' }}>
                  RN-Stock{' '}
                </Text>
                screen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home
