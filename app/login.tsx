import { View, Text, Image } from 'react-native'
import React from 'react'
import MyButton from "@/app-example/components/MyButton";
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native';

const Login = () => {
    const router = useRouter();
    const onLogin = () => {
        router.navigate("/signup");
    };
  return (
    <View style={{ flex: 1}}>
    <Image source={require("@/assets/images/login.jpg")} style={{
        width: "100%",
        height: "70%",
        backgroundColor: "lightgray",
    }}
    resizeMode="cover"
    />
    <View style={{ padding: 20 , gap: 10}}>
    <TextInput 
    placeholder="Enter your email" 
    style={{ 
        borderWidth: 1, 
        borderColor: "red", 
        width: "100%",
         padding: 10, 
         marginBottom: 10,
         borderRadius: 10 
         }}
         onChangeText={(e) => console.log(e)}>   # This is how to get the storevalue form the text input.
         </TextInput>
    <TextInput 
    placeholder="Enter your password" style={{ 
        borderWidth: 1, 
        borderColor: "red", 
        width: "100%",
         padding: 10, 
         marginBottom: 10,
         borderRadius: 10 }}>
         </TextInput>
      <MyButton title={"Login"} onPress={onLogin} />
      </View>
      </View>
  );
};

export default Login;