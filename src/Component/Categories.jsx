import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
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
      <View style={{ paddingTop: 62, paddingBottom: 22 }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require("../assets/left-arrow.png")} style={{ height: 22, width: 20}} />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "#2D0C57", fontSize: 34, fontWeight: 700 }}>Categories</Text>
      <View style={{ height: 50, width: "100%", backgroundColor: "#FFF", borderRadius: 27, borderColor: "#D9D0E3", borderWidth: 1, marginTop: 20, flexDirection: "row" }}>
        <View style={{ justifyContent: 'center', alignItems: "flex-start", paddingLeft: 20 }} >
          <Image source={require("../assets/search.png")} style={{ height: 24, width: 24 }} />
        </View>
        <TextInput value={input} onChange={(text) => setinput(text)} placeholder='search' style={styles.input} />
      </View>
      <SafeAreaView>
        <FlatList showsVerticalScrollIndicator={false} style={{ marginBottom: 520, marginTop: 20 }} numColumns={2} data={list} renderItem={(item) => {
          return (
            <View key={item.id} style={{ backgroundColor: "#FFFFFF", height: 211, width: "45%", borderRadius: 8, elevation: 3, margin: 10 }}>
              <Image source={require("../assets/Media.png")} />
            
                <Text onPress={()=>navigation.navigate("Vegetables")} style={{ marginTop: 10, fontSize: 18, fontWeight: 700, color: "#2D0C57", paddingLeft: 10 }}>Vegetables</Text>
                         
              <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 400, color: "#9586A8", paddingLeft: 10 }}>(43)</Text>
            </View>
          )
        }} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default Categories;

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
