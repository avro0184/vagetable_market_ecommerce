import {View, Text, ScrollView, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Card from './src/Component/Card';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gridstack from './src/Navigation/GridStack';
import Cartstack from './src/Navigation/CartStack';
import Item from './src/Component/Item';

const Tab = createBottomTabNavigator()

const App = () => {
  return (
       <>
      <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown:false,tabBarStyle:{
        position:"absolute",
        height:80,
        backgroundColor:"#fff",
      }}} initialRouteName='checkout'>
      <Tab.Screen name='home' component={Item} options={{tabBarIcon:({focused})=>{
       return (<View style={{justifyContent:'center', alignItems:'center',}}>
          <Image source={require("./src/assets/menu.png")} style={{tintColor:focused ?"#7203FF":"black" ,height:24, width:24}}/>
        </View>)
      }}} />
        <Tab.Screen name='checkout' component={Cartstack} options={{tabBarIcon:({focused})=>{
       return (<View style={{justifyContent:'center', alignItems:'center',}}>
          <Image source={require("./src/assets/shopping-cart.png")} style={{tintColor:focused ?"#7203FF":"black" ,height:24, width:24}}/>
        </View>)
      }}} />
        <Tab.Screen name='card' component={Card} options={{tabBarIcon:({focused})=>{
       return (<View style={{justifyContent:'center', alignItems:'center',}}>
          <Image source={require("./src/assets/user.png")} style={{tintColor:focused ?"#7203FF":"black" ,height:24, width:24}}/>
        </View>)
      }}} />
      </Tab.Navigator>
      </NavigationContainer>
      </>
  );
};

export default App;
