import React from 'react'
import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'


const WalletScreen = ({navigation}) => {
  return (
    <View>
       <TouchableOpacity
				  onPress={() => navigation.navigate("Payment")}
				  style={{
            backgroundColor: "#f96163",
            borderRadius: 29,
            paddingVertical: 18,
            width: "80%",
            marginTop:650,
            alignContent:'space-between',
            marginVertical:30,
            marginLeft:40,
            alignItems: "center",
				}}
			  >
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Payment with credit card
				</Text>
			</TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({})

export default WalletScreen