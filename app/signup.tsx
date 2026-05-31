import { View, Text } from 'react-native'
import React from 'react'
import MyButton from "@/app-example/components/MyButton";
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();

  const onRegister = () => {
    router.navigate("/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton title={"Register"} onPress={onRegister} />
      </View>
  );
};

export default Signup;