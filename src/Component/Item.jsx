import { Image, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from "react-native-image-slider-box"



const Item = () => {
    const images= [
        require("../assets/item.png"),
        require("../assets/item.png"),
        require("../assets/item.png")
      ]
    return (
        <SafeAreaView style={{ backgroundColor: "#F6F5F5", }}>
            <View style={{ height: 358 }}>
                <SliderBox images={images} sliderBoxHeight={358} dotColor="#FFFFFF" inactiveDotColor="gray" dotStyle={{marginBottom:100}} autoplay={true} autoplayInterval={2000} circleLoop={true} />
                {/* <Image source={require("../assets/item.png")} /> */}
            </View>
            <View style={{backgroundColor: "#F6F5F5", padding: 20, borderTopRightRadius: 30, borderTopLeftRadius: 30, elevation: 3, height: 600, marginTop: -100 }}>
                <Text style={{ color: "#2D0C57", fontSize: 30, fontWeight: 700 }} >Boston Lettuce</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    <Text style={{ color: "#2D0C57", fontSize: 32, fontWeight: 700 }}>1.10</Text>
                    <Text style={{ color: "#9586A8", fontSize: 24, fontWeight: 400 }}>€ / piece</Text>
                </View>
                <Text style={{ color: "#06BE77", fontSize: 17, fontWeight: 500, marginTop: 8 }}>~ 150 gr / piece</Text>
                <Text style={{ color: "#2D0C57", fontSize: 22, fontWeight: 700, marginTop: 32 }}>Spain</Text>
                <Text style={{ color: "#9586A8", fontSize: 17, fontWeight: 400, marginTop: 32, letterSpacing: -0.41, lineHeight: 25 }}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
                <View style={{ flexDirection: 'row', width: "100%", columnGap: 20, position: 'absolute', bottom: 100, left:15 }}>
                    <View style={{ height: 56, width: "25%", paddingHorizontal: 29, paddingVertical: 10, backgroundColor: "#FFFFFF", borderRadius: 8, borderWidth: 1, borderColor: "#D9D0E3", alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require("../assets/heart.png")} style={{ height: 20, width: 20, tintColor: "#9586A8"  }} />
                    </View>
                    <View style={{ height: 56, width: "70%", paddingHorizontal: 68, paddingVertical: 10, backgroundColor: "#0BCE83", borderRadius: 8, borderWidth: 1, borderColor: "#D9D0E3", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Image source={require("../assets/shopping.png")} style={{ height: 20, width: 20, tintColor: "#FFFFFF" }} />
                        <Text style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10, color:"#FFFFFF", fontSize:15, fontWeight:600 }}>add to cart</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Item

const styles = StyleSheet.create({

})