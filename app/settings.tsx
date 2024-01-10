import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Settings() {
    const [name, setName] = useState("")
    console.log(name)
    const navigation = useRouter();
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <Button
        title="Go to Home!"
        onPress={() => navigation.replace("/")}
      />
      <TextInput placeholder={"Enter text here"} onChangeText={setName}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
