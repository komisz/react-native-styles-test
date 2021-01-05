import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styled, { css } from '@emotion/native'

const SafeAreaView1 = styled.SafeAreaView`
  flex: 0;
  background-color: rgb(255, 255, 255);
`

const SafeAreaView2 = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(255, 255, 255);
`

const OuterWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
`

const StyledButton = styled.TouchableOpacity`
  background-color: rgb(238, 238, 238);
  padding-horizontal: 40px;
  padding-vertical: 30px;
  border-width: 0.5px;
  border-color: rgb(240, 240, 240);
  border-radius: 10px;
`

const StyledText = styled.Text`
  font-size: 18px;
  color: rgb(128, 128, 128);
  font-weight: bold;
`

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView1 />
      <SafeAreaView2>
        <OuterWrapper>
          <Icon name={'heart-outline'} size={100} color={'green'} />
          <View>
            <StyledButton onPress={() => {}}>
              <StyledText>
                this is{' '}
                <Text style={{ fontWeight: 'bold', color: 'green' }}>
                  {' '}
                  EMOTION{' '}
                </Text>{' '}
                screen
              </StyledText>
            </StyledButton>
          </View>
        </OuterWrapper>
      </SafeAreaView2>
    </>
  )
}

export default Home
