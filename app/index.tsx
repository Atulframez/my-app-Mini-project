import MyButton from "@/app-example/components/MyButton";
import { Link , useRouter} from "expo-router";
import { Text, View  } from "react-native";

const Index = () => {
  const router = useRouter();

  const onContinue = () => {
    router.navigate("/login");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton title={"Continue"} onPress={onContinue} />
      </View>
  );
};

export default Index;