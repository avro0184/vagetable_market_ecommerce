import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatbox = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize:24, color:"black", fontWeight:"bold"}}>Flatbox</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={{flex:1, flexDirection:'row', columnGap:10, marginVertical:20}}>
      <View style={{backgroundColor:"#176B87", height:120,width:80, borderRadius:20, justifyContent:'center', alignItems:'center'}}><Text >Scroll</Text></View>
      <View style={{backgroundColor:"#43766C", height:120,width:80, borderRadius:20, justifyContent:'center', alignItems:'center'}}><Text>Scroll</Text></View>
      <View style={{backgroundColor:"#7E2553", height:120,width:80, borderRadius:20, justifyContent:'center', alignItems:'center'}}><Text>Scroll</Text></View>
      <View style={{backgroundColor:"#19A7CE", height:120,width:80, borderRadius:20, justifyContent:'center', alignItems:'center'}}><Text>Scroll</Text></View>
      <View style={{backgroundColor:"#DC84F3", height:120,width:80, borderRadius:20, justifyContent:'center', alignItems:'center'}}><Text>Scroll</Text></View>
      <View style={{backgroundColor:"yellow", height:120,width:80, borderRadius:20, justifyContent:'center', alignItems:'center'}}><Text>Scroll</Text></View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Flatbox

const styles = StyleSheet.create({})