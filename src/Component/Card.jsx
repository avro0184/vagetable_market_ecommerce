import { Button, Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <SafeAreaView style={{marginEnd:8, marginVertical:20}}>
        <View><Text style={{fontSize:25, fontWeight:"800"}}>card</Text></View>
        <View style={{marginTop:10,backgroundColor:"#F6F1F1", height:"auto",borderRadius:20, justifyContent:'center',alignItems:"flex-start", elevation:3, shadowOffset:{width:1, height:1} }}>
            <Image source={require("../assets/download.jpeg")} style={{width:"100%",height:200,borderTopLeftRadius:20, borderTopRightRadius:20}} />
            <View style={{paddingVertical:10, paddingHorizontal:10,}}>
            <Text style={{marginTop:10,fontSize:20, fontWeight:'bold'}}>What is artificial intelligence (AI)?</Text>
            <Text numberOfLines={2} style={{marginTop:10,marginBottom:10,fontSize:13}}>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</Text>
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence#:~:text=Artificial%20intelligence%20is%20the%20simulation,speech%20recognition%20and%20machine%20vision.")} style={{justifyContent:'center', alignItems:'center', padding:10, borderRadius:10, borderWidth:3, borderColor:"black"}}>
                <Text style={{color:"black", fontSize:20, fontWeight:'bold'}}>Read more ...</Text>
            </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Card

const styles = StyleSheet.create({})