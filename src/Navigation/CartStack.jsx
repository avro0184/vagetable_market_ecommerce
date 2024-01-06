import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Checkout from '../Component/Checkout'
import Payment from '../Component/Payment'


const Stack = createNativeStackNavigator()

const Cartstack = () => {
  return (
       <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Checkout' component={Checkout} />
        <Stack.Screen options={{headerShown:false}} name='Payment' component={Payment} />
       </Stack.Navigator>
  )
}

export default Cartstack

const styles = StyleSheet.create({})