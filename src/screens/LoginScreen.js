import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from "react-native";
import React, { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from '@expo/vector-icons'
import ToastMessage from "../components/ToastMessage";
import { useRef } from "react";

const LoginScreen = ({ navigation }) => {
	// collect data
	const[phone, setPhone] = useState("");
	const[password, setPassword] = useState("");


	//create toast message ref 
	const [toastType, setToastType] = useState('success')
	const toastRef =useRef(null);

	const handleShowToast = () =>{
		if(toastRef.current){
			toastRef.current.show();
		};
	}
	
	// get set
	const onChagePhone = (value) =>{
		setPhone(value)
	}
	const onChagePassword = (value) =>{
		setPassword(value)
	}

	//button login
	const onClickLogin = () =>{
		if(phone.length == 0 || password.length == 0){
			return console.log("Please enter login infomation")
			navigation.navigate("FoodList")

			setToastType('fail');
			handleShowToast()
		}else{
			setToastType('success');
			handleShowToast()
			navigation.navigate("FoodList")
		}
		console.log('Click login', {
			phone,
			password, 
		})
	}

	return (
		<View style={{}}>
			<View style={{justifyContent:"center", alignItems:"center"}}>
				
				<ToastMessage
				type={toastType}
				text='Login successfuly'
				description='Login succes'
				ref={toastRef}
				/>

			</View>
			<View>
				<Image
					source={require("../../assets/images/loginimage.png")}
					style={{ marginTop: 100, marginLeft:120, }}
				/>
				<Text
					style={{
						marginTop:20,
						fontSize: 30,
						fontWeight: "bold",
						marginLeft:90,
						color: "#3c444c",
					}}
				>
					Home Meal Taste
				</Text>
					<Text
					style={{
						fontSize: 25,
						fontWeight: "bold",
						color: 'red',
						marginLeft:120,
						marginBottom: 40,
					}}
				>
					Welcome Back!
					</Text>
					
				</View>
				<View>
					<View style={{paddingLeft:10,marginHorizontal:40, flexDirection:'row', borderColor:'grey', borderWidth:1, borderRadius:10, marginBottom:10}}>
						<View style={{justifyContent:"center", alignItems:"center",}}>
							<Ionicons name="call-outline" size={20}>
							</Ionicons>
						</View>
						
						<View>
							<View style={{ padding:20}}>
								<TextInput placeholder="Your Phone Numbers" value={phone} onChangeText={onChagePhone}></TextInput>
							</View>
						</View>
					</View>

					<View style={{paddingLeft:10,marginHorizontal:40, flexDirection:'row', borderColor:'grey', borderWidth:1, borderRadius:10,}}>
						<View style={{justifyContent:"center", alignItems:"center",}}>
							<Ionicons name="lock-closed-outline" size={20}>
							</Ionicons>
						</View>
							<View style={{padding:20}}>
								<TextInput placeholder="Your Password" value={password} secureTextEntry={true} onChangeText={onChagePassword}>
								</TextInput>
							</View>

					</View >
				</View>
					
					<TouchableOpacity
				// onPress={() => navigation.navigate("FoodList")}
				onPress={onClickLogin}
				type=''
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					marginTop:30,
					marginLeft:80,
					justifyContent:"center",
					paddingVertical: 18,
					width: "60%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700",}}>
					Login
				</Text>
			</TouchableOpacity>

			<View style={{justifyContent:"center",alignItems:"center"}}>
				<Text style={{marginTop:50}}>
					If You Don't Have An Account ?
				</Text>
				<View>
						<TouchableOpacity 
						onPress={() => navigation.navigate("Regiter")}
						style={{ marginTop:20 ,color:'white',justifyContent:"center",alignItems:"center"}}>
							<Text style={{color:'black',fontWeight:'500',}}>Regiter Account</Text>
						</TouchableOpacity>
					</View>
			</View>
			
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});
