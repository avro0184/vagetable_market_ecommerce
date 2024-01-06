import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Vegetables from '../Component/Vegetables'
import Categories from '../Component/Categories'
import Item from '../Component/Item'


const Stack = createNativeStackNavigator()

const Gridstack = () => {
  return (
       <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Categories' component={Categories} />
        <Stack.Screen options={{headerShown:false}} name='Vegetables' component={Vegetables} />
        <Stack.Screen options={{headerShown:false}} name='Item' component={Item} />
       </Stack.Navigator>
  )
}

export default Gridstack

const styles = StyleSheet.create({})