import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import FoodCard from "../components/FoodCard";

const FoodListScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 40 }}>
			{/* render header */}

			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<View style={{}}>
					<View style={{}}>
						<TouchableOpacity
						style={{flexDirection:"row"}}
							onPress={() => navigation.navigate("UserProfile")}
						>
							<Header headerIcon={"user"} style={{}} />
							<Header headerText={"Hello user"} />

						</TouchableOpacity>
					</View>
				</View>
				<Header headerIcon={"bell-o"} />

			</View>


			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"enter your favorate food"} />

			{/* sessiion filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Area</Text>
				{/* session list */}
				<CategoriesFilter />
			</View>

			{/*  List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Menu Meal</Text>
				{/*  list */}
				<FoodCard />
			</View>
			<View>
				<Text>
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default FoodListScreen;

const styles = StyleSheet.create({});
