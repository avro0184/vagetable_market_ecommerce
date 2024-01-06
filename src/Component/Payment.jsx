import { StyleSheet, SafeAreaView, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Payment = () => {
    const [name, setname] = useState("Alexandra Smith")
    const [number, setnumber] = useState("4747  4747  4747  4747")
    const [date, setdate] = useState("07/21")
    const [cvc, setcvc] = useState("474")
    return (
        <SafeAreaView style={{ paddingHorizontal: 12 }}>
            <View style={{ rowGap: 20, backgroundColor: "#F6F5F5", marginTop: 62, marginBottom: 22, height: 96 }}>
                <Image source={require("../assets/left-arrow.png")} style={{ height: 22, width: 20 }} />
                <Text style={{ fontSize: 30, fontWeight: 700, color: "#2D0C57" }}>Credit / Debit card</Text>
            </View>
            <View style={{ height: 240, backgroundColor: "#8CA6DB", borderRadius:8 }}>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Image source={require("../assets/camera.png")} style={{ height: 29, width: 34 }} />
            </View>

            <View style={{ marginVertical: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: 400, color: "#9586A8", paddingHorizontal: 15 }}>Name on card</Text>
                <View style={{ height: 48, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#D9D0E3", borderRadius: 8 }}>
                    <TextInput style={styles.input} value={name} onChange={(text) => setname(text)} />
                </View>
            </View>

            <View style={{ marginVertical: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: 400, color: "#9586A8", paddingHorizontal: 15 }}>Card number</Text>
                <View style={{ height: 48, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#D9D0E3", borderRadius: 8, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <TextInput style={styles.input} value={number} onChange={(text) => setnumber(text)} />
                    <Image source={require("../assets/symble.png")} style={{ marginRight: 10 }} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ width: "45%" }} >
                    <Text style={{ fontSize: 14, fontWeight: 400, color: "#9586A8", paddingHorizontal: 15 }}>Expiry date</Text>
                    <View style={{ height: 48, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#D9D0E3", borderRadius: 8 }}>
                        <TextInput style={styles.input} value={date} onChange={(text) => setdate(text)} />
                    </View>
                </View>
                <View style={{ width: "45%" }} >
                    <Text style={{ fontSize: 14, fontWeight: 400, color: "#9586A8", paddingHorizontal: 15 }}>Card number</Text>
                    <View style={{ height: 48, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#D9D0E3", borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <TextInput style={styles.input} value={cvc} onChange={(text) => setcvc(text)} />
                        <Image source={require("../assets/Hint.png")} style={{ marginLeft: -100 }} />
                    </View>
                </View>
            </View>

           <View style={{height:56, backgroundColor:"#0ACF83", borderRadius:8, justifyContent:'center', alignItems:'center', marginTop:15}} >
              <Text style={{fontSize:15,fontWeight:600, color:"#FFFFFF"}}>use this card</Text>
           </View>

        </SafeAreaView>
    )
}

export default Payment

const styles = StyleSheet.create({
    input: {
        color: '#2D0C57',
        fontFamily: 'SF Pro Text',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41,
        overflow: "scroll",
        width: "80%",
        marginLeft: 10
    },
});