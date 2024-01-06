import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Checkout = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ paddingHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', backgroundColor: "#F6F5F5", paddingTop: 62, marginBottom: 22, height: 96 }}>
                <Image source={require("../assets/left-arrow.png")} style={{ height: 22, width: 20 }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: 700, color: "#2D0C57" }} onPress={()=>navigation.navigate("Payment")}>Checkout</Text>
                </View>
            </View>
            <View style={{ rowGap: 32, marginTop: 20 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 22, fontWeight: 700, color: "#2D0C57" }} >Payment method</Text>
                    <Text style={{ fontSize: 15, fontWeight: 600, color: "#7203FF" }}>CHANGE</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 25 }}>
                    <Image source={require("../assets/credit-card.png")} style={{ height: 24, width: 24 }} />
                    <Text style={{ fontSize: 17, fontWeight: 400, color: "#9586A8" }}>**** **** **** 4747</Text>
                </View>
            </View>
            <View style={{ rowGap: 32, marginTop: 50 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 22, fontWeight: 700, color: "#2D0C57" }} >Delivery address</Text>
                    <Text style={{ fontSize: 15, fontWeight: 600, color: "#7203FF" }}>CHANGE</Text>
                </View>
                <View style={{ flexDirection: 'row', columnGap: 25 }}>
                    <Image source={require("../assets/home.png")} style={{ height: 24, width: 24, marginTop: 10 }} />
                    <Text style={{ fontSize: 17, fontWeight: 400, color: "#9586A8", height: 128, width: 197, lineHeight: 30 }}>Alexandra Smith
                        Cesu 31 k-2 5.st, SIA Chili
                        Riga
                        LV–1012
                        Latvia
                        4747</Text>
                </View>
            </View>
            <View style={{ rowGap: 32, marginTop: 20 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 22, fontWeight: 700, color: "#2D0C57" }} >Delivery options</Text>
                    <Text style={{ fontSize: 15, fontWeight: 600, color: "#7203FF" }}>CHANGE</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 25 }}>
                    <Image source={require("../assets/walk.png")} style={{ height: 24, width: 24 }} />
                    <Text style={{ fontSize: 17, fontWeight: 400, color: "#9586A8" }}>I’ll pick it up myself</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 25 }}>
                    <Image source={require("../assets/bicycle.png")} style={{ height: 24, width: 24 }} />
                    <Text style={{ fontSize: 17, fontWeight: 400, color: "#9586A8" }}>By courier</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 25 }}>
                    <Image source={require("../assets/drone.png")} style={{ height: 24, width: 24, tintColor: "#7203FF" }} />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: 400, color: "#7203FF" }}>By Drone</Text>
                        <Image source={require("../assets/check.png")} style={{ height: 24, width: 24, tintColor: "#7203FF" }} />
                    </View>
                </View>
                <View style={{marginTop:10, justifyContent:'space-between', flexDirection:'row'}}>
                    <Text style={{color:"#2D0C57",fontSize:22,fontWeight:700}} >Non-contact-delivery</Text>
                    <View style={{width:74, height:30 , backgroundColor:"#E2CBFF", borderRadius:37, justifyContent:'space-between',flexDirection:'row',alignItems:'center', paddingHorizontal:4}}>
                       <Text style={{marginLeft:10, fontSize:14,fontWeight:500, color:"#6C0EE4"}}>Yes</Text>
                       <View style={{height:26, width:25, borderRadius:100, backgroundColor:"#FFFFFF"}}></View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Checkout

const styles = StyleSheet.create({})