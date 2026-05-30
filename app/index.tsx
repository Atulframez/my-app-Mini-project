import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", textAlign: "center", 
        fontStyle: "italic" }}>
        Welcome to the Atul-First-App
      </Text>
      <Link href={"/about"}>Go to about</Link>
    </View>
  );
}
