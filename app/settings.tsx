import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  // one useState is of type 'string' and the other is of the type arry(of strings) OR null
  const [message, setMessage] = useState<string>("");
  const [userInput, setUserInput] = useState<string[] | null>(null);
  const navigation = useRouter();


  // If the users input is null then just show the current state, else return the previous stats plus new mesage
  function submitText() {
    setUserInput((prevUserInput) => {
      if (prevUserInput === null) {
        return [message];
      } else {
        return [...prevUserInput, message];
      }
    });
    // setMessage('');

  }

  // function that takes item that should be of type string and returns a View/Text with that item
  const renderItem = ({ item }: { item: string }) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <Button title="Go to Home!" onPress={() => navigation.replace("/")} />
      <TextInput placeholder="Enter text here" onChangeText={setMessage} />
      <Button title="Submit" onPress={submitText} />
      <View>
        <FlatList
          data={userInput}
          // Not sure what keyExtractor is doing need to research. Flatlist works even if that line is commented out
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 250,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
