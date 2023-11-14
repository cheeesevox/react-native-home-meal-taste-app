import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/welcome.png")}
				style={{ marginTop: 100, }}
			/>

			<Text
				style={{
					fontSize: 30,
					fontWeight: "bold",
					color: "#3c444c",
					marginBottom: 40,
				}}
			>
				Food Like Mommy Cooked
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("FoodList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Login User Page
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("ChefPage")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					marginTop:15,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Login Chef Page
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});
