import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  const [message, setMessage] = useState<string>("");
  const [userInput, setUserInput] = useState<string | null>(null);
  const navigation = useRouter();

  const handleTextChange = (text: string) => {
    setMessage(text);
  };

  function submitText() {
    setUserInput(message);
  }

  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <Button title="Go to Home!" onPress={() => navigation.replace("/")} />
      <TextInput placeholder="Enter text here" onChangeText={setMessage} />
      <Button title="Submit" onPress={submitText} />
      <View>
        <Text>
          {userInput}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
