import {
  Alert,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,           // ← Added this import
} from 'react-native';
import { useState } from "react";
import Input from "../components/input.jsx";
import Button from "../components/button.jsx";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function index() {
  const [theme, setTheme] = useState(true); // true = light, false = dark

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [pressCount, setPressCount] = useState(0);
  const insets = useSafeAreaInsets();

  // true → white (light mode), false → black (dark mode)
  const backgroundColor = theme ? "white" : "black";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + 30,
          paddingHorizontal: 20,
        }}
      >
        {/* Toggle button */}
        <TouchableOpacity
          onPress={() => setTheme(prev => !prev)}
          style={{
            backgroundColor: theme ? "#444" : "#888",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            alignSelf: "flex-end",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {theme ? "Switch to Dark" : "Switch to Light"}
          </Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/images/icon.png")}
          style={{ height: 70, width: 70, alignSelf: "center", marginBottom: 10 }}
        />

        <Text
          style={{
            color: 'red',
            fontSize: 40,
            backgroundColor: 'white',
            fontWeight: 'bold',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          hello
        </Text>

        <Text
          style={{
            color: 'red',
            fontSize: 28,
            backgroundColor: 'blue',
            fontWeight: 'bold',
            paddingVertical: 8,
            paddingHorizontal: 25,
            borderRadius: 8,
          }}
        >
          my name is
        </Text>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 20,
            backgroundColor: "white",
            paddingHorizontal: 20,
            borderRadius: 100,
            color: theme ? 'black' : '#ddd',
          }}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
          placeholderTextColor={theme ? "#666" : "#aaa"}
          value={name}
        />

        {/* Fixed Pressable with Platform logging */}
        <Pressable
          onPress={() => {
            Alert.alert("i was clicked", "you clicked me ");
            console.log("Current platform:", Platform.OS); // ← This will print "ios" or "android"
            setPressCount(prev => prev + 1);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#e0e0e0' : '#f0f0f0',
              paddingVertical: 12,
              paddingHorizontal: 30,
              borderRadius: 12,
              marginVertical: 15,
              alignSelf: 'flex-start',
            }
          ]}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>
            click me! ({pressCount})
          </Text>
        </Pressable>

        <Button
          onPress={() => setCount(prev => prev + 1)}
          text={`touch (${count})`}
          style={{ backgroundColor: 'red', marginVertical: 10 }}
        />

        <Button text="not" style={{ alignSelf: "flex-end", backgroundColor: "yellow" }} />
        <Button text="my" style={{ backgroundColor: "blue" }} />
        <Button text="anointed" style={{ backgroundColor: "pink" }} />
        <Input type={"default"} label={"Name"} placeholder="your Fullname"/>
        <Input type={"email-address"} label={"Email"} placeholder="Valid Email"/>
        <Input type={"number-pad"} label={"number"} placeholder="Phone number"/>

      </ScrollView>
    </View>
  );
}