import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Vegetables = () => {
    const navigation = useNavigation()
    const [input, setinput] = useState("")
    const list = [
        {
            "id": 1,
            "title": "Vegetables",
            "total": 42
        },
        {
            "id": 2,
            "title": "Fruits",
            "total": 23
        },
        {
            "id": 3,
            "title": "Bread",
            "total": 44
        },
        {
            "id": 4,
            "title": "Sweets",
            "total": 11
        },
        {
            "id": 5,
            "title": "Sweets",
            "total": 54
        },
        {
            "id": 6,
            "title": "Sweets",
            "total": 32
        },
        {
            "id": 6,
            "title": "Sweets",
            "total": 32
        },
        {
            "id": 6,
            "title": "Sweets",
            "total": 32
        }, ,
        {
            "id": 6,
            "title": "Sweets",
            "total": 32
        }

    ]
    return (
        <SafeAreaView style={{ backgroundColor: "#F6F5F5", paddingHorizontal: 12 }}>
            <Image source={require("../assets/Vegetables.png")} style={{ position: 'absolute', right: 0, top: 1 }} />
            <View style={{ paddingTop: 62, paddingBottom: 22 }}>
                <Image source={require("../assets/left-arrow.png")} style={{ height: 22, width: 20}} />
            </View>
            <Text style={{ color: "#2D0C57", fontSize: 34, fontWeight: 700 }}>Vegetables</Text>
            <View style={{ height: 50, width: "100%", backgroundColor: "#FFF", borderRadius: 27, borderColor: "#D9D0E3", borderWidth: 1, marginTop: 20, flexDirection: "row" }}>
                <View style={{ justifyContent: 'center', alignItems: "flex-start", paddingLeft: 20 }} >
                    <Image source={require("../assets/search.png")} style={{ height: 24, width: 24 }} />
                </View>
                <TextInput value={input} onChange={(text) => setinput(text)} placeholder='search' style={styles.input} />
            </View>
            <View style={{ height: 34, width:"auto", backgroundColor: "#E2CBFF", borderRadius: 24, borderColor: "#D9D0E3", borderWidth: 1, marginTop: 20, flexDirection: "row" }}>
                <View style={{ justifyContent: 'center', alignItems: "center", paddingLeft: 20, flexDirection:'row' }} >
                    <Image source={require("../assets/check.png")} style={{ height: 24, width: 24 , marginEnd:15 }} />
                    <Text style={{fontSize:14 , fontWeight:500,color:"#6C0EE4"}}>Сabbage and lettuce (14)</Text>
                </View>
            </View>
            <SafeAreaView>
                <FlatList showsVerticalScrollIndicator={false} style={{ marginBottom: 625, marginTop: 20 }} numColumns={2} data={list} renderItem={(item) => {
                    return (
                        <View key={item.id} style={{ backgroundColor: "#FFFFFF", height: 160, width: "100%", borderRadius: 8, elevation: 3, margin: 10, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <Image source={require("../assets/Media.png")} style={{ height: 128, width: 177, borderRadius: 8 }} />
                            </View>
                            <View style={{ justifyContent: "flex-start", alignItems: 'center', padding: 10 }}>
                                <Text onPress={()=>navigation.navigate("Item")} style={{ height: 24, fontSize: 18, fontWeight: 600, lineHeight: 26, color: "#2D0C57" }}>Boston Lettuce</Text>
                                <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 700, color: "#2D0C57" }}>1.10</Text>
                                    <Text style={{ fontSize: 16, fontWeight: 400, color: "#9586A8" }}>€ / piece</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', gap: 10, marginTop: 30 }}>
                                    <View style={{ paddingVertical: 10, paddingHorizontal: 29, backgroundColor: "#FFFFFF", elevation: 2, borderRadius: 8 }}>
                                        <Image source={require("../assets/heart.png")} style={{ height: 20, width: 20, tintColor: "#9586A8" }} />
                                    </View>
                                    <View style={{ paddingVertical: 10, paddingHorizontal: 29, backgroundColor: "#0BCE83", elevation: 2, borderRadius: 8 }}>
                                        <Image source={require("../assets/shopping.png")} style={{ height: 20, width: 20, tintColor: "#FFFFFF" }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }} />
            </SafeAreaView>
        </SafeAreaView>
    );
}

export default Vegetables;

const styles = StyleSheet.create({
    input: {
        color: '#9586A8',
        fontFamily: 'SF Pro Text',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41,
        paddingLeft: 15,
        overflow: "scroll",
        width: "80%"
    },
});
