import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

// export default function Settings() {
//   const [Message, setMessage] = useState([]);
//   console.log(Message);
//   const navigation = useRouter();
//   return (
//     <View style={styles.container}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home!" onPress={() => navigation.replace("/")} />
//       <TextInput
//         placeholder={"Enter text here"}
//         onChangeText={setMessage}
//       ></TextInput>
//       <Text>{Message}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  const [message, setMessage] = useState<string>("");
  const [userInput, setUserInput] = useState<string[]>([]);
  const navigation = useRouter();

  const handleTextChange = (text: string) => {
    setUserInput(prevName => [...prevName, text]);
  };
  console.log(message)
  function submitText() {
    console.log("Submit") 

  }

  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <Button
        title="Go to Home!"
        onPress={() => navigation.replace('/')}
      />
      <TextInput
        placeholder="Enter text here"
        onChangeText={handleTextChange}
      />
      <Text>{userInput.join(', ')}</Text>

      <Button
        title="Submit"
        onPress={submitText}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;

