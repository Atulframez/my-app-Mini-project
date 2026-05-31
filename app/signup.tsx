import { View, Text, Image } from 'react-native'
import React from 'react'
import MyButton from "@/app-example/components/MyButton";
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native';

const Signup = () => {
  const router = useRouter();

  const onRegister = () => {
    router.navigate("/login");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/register.jpg")}
        style={{
          width: "100%",
          height: "60%",
        }} 
      />
      <View style={{ padding: 20 , gap: 10}}>
        <TextInput
            placeholder="Enter your Name"
            style={{
                borderWidth: 1,
                borderColor: "red",
                width: "100%",
                padding: 10,
                marginBottom: 10,
                borderRadius: 20,
            }}
            onChangeText={(e) => console.log(e)}>
                
            </TextInput>
      <TextInput 
          placeholder="Enter your email" 
          style={{ 
              borderWidth: 1, 
              borderColor: "red", 
              width: "100%",
               padding: 10, 
               marginBottom: 10,
               borderRadius: 20 
               }}
               onChangeText={(e) => console.log(e)}>   
               </TextInput>
          <TextInput 
          placeholder="Enter your password" style={{ 
              borderWidth: 1, 
              borderColor: "red", 
              width: "100%",
               padding: 10, 
               marginBottom: 10,
               borderRadius: 20 }}>
               </TextInput>
            <TextInput 
          placeholder="Re-Enter your password" style={{ 
              borderWidth: 1, 
              borderColor: "red", 
              width: "100%",
               padding: 10, 
               marginBottom: 10,
               borderRadius: 20 }}>
               </TextInput>
      <MyButton title="Register" onPress={onRegister} />
    </View>
    </View>
  );
};

export default Signup;