import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const navigation = useRouter();
  return (
    <View style={styles.container}>
      <Text>Home Sweet Home!</Text>
      <Button
        title="Go to Settings!"
        onPress={() => navigation.push("/settings")}
      />
      <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("pressed")}
    >
      <Text style={{ color: 'black' }}>PRESS ME</Text>
    </TouchableOpacity>
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
  button: {
    backgroundColor: 'blue', // Example background color
    padding: 10,
    marginTop: 10, // Adjust the margin as needed
  }
});
