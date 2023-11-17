import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodListScreen from "../screens/FoodListScreen";
import FoodDetailsScreen from "../screens/FoodDetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import OrderCartScreen from "../screens/OrderCartScreen";
import WalletScreen from "../screens/WalletScreen";
import PaymentScreen from "../screens/PaymentScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FeedBackScreen from "../screens/FeedBackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();
// const screenOption = {
//     tabBarShowLabel: false,
//     headerShown: false,
//     tabBarStyle: {
//         position: "absolute",
//         bottom: 0,
//         right: 0,
//         left: 0,
//         elevation: 0,
//         height: 60,
//         background: "#fff"
//     }
// }
// const Navbar=()=> {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator screenOption={screenOption}>
//                 <Tab.Screen name="Home" 
//                             component={FoodListScreen}
//                             option={{
//                                 tabBarIcon:({focused})=>{
//                                     return(
//                                         <View style={{alignItems:'center', justifyContent:'center'}}>
//                                             <Entypo name="home" size={24} color={focused ? "#16247d":"111"}/>
//                                             <Text style={{fontSize:12, color:"#16247d"}}>HOME</Text>
//                                         </View>
//                                     )
//                                 } 
//                             }}/>
//                 <Tab.Screen name="Order" 
//                             component={OrderScreen}
//                             option={{
//                                 tabBarIcon:({focused})=>{
//                                     return(
//                                         <View style={{alignItems:'center', justifyContent:'center'}}>
//                                             <Entypo name="home" size={24} color={focused ? "#16247d":"111"}/>
//                                             <Text style={{fontSize:12, color:"#16247d"}}>ORDER</Text>
//                                         </View>
//                                     )
//                                 } 
//                             }} />
//                 <Tab.Screen name="Wallet" 
//                             component={WalletScreen}
//                             option={{
//                                 tabBarIcon:({focused})=>{
//                                     return(
//                                         <View style={{alignItems:'center', justifyContent:'center'}}>
//                                             <Entypo name="home" size={24} color={focused ? "#16247d":"111"}/>
//                                             <Text style={{fontSize:12, color:"#16247d"}}>WALLET</Text>
//                                         </View>
//                                     )
//                                 } 
//                             }} />
//                 <Tab.Screen name="UserProfile"
//                             component={UserProfileScreen}
//                             option={{
//                                 tabBarIcon:({focused})=>{
//                                     return(
//                                         <View style={{alignItems:'center', justifyContent:'center'}}>
//                                             <Entypo name="home" size={24} color={focused ? "#16247d":"111"}/>
//                                             <Text style={{fontSize:12, color:"#16247d"}}>USERPROFILE</Text>
//                                         </View>
//                                     )
//                                 } 
//                             }} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }



const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="FoodList" component={FoodListScreen} />
				<Stack.Screen name="FoodDetail" component={FoodDetailsScreen} />
				<Stack.Screen name="OrderCart" component={OrderCartScreen} />
				<Stack.Screen name="Wallet" component={WalletScreen} />
				<Stack.Screen name="Payment" component={PaymentScreen} />
				<Stack.Screen name="UserProfile" component={UserProfileScreen} />
				<Stack.Screen name="Regiter" component={RegisterScreen} />
				<Stack.Screen name="Feedback" component={FeedBackScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default AppNavigator;

const styles = StyleSheet.create({});
