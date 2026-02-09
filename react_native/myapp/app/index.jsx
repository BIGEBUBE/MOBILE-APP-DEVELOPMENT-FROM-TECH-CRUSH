import { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../components/button.jsx";
import Input from "../components/input.jsx";

export default function index() {
  const [theme, setTheme] = useState(true); // true = light, false = dark

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [pressCount, setPressCount] = useState(0);
  const insets = useSafeAreaInsets();

  const backgroundColor = theme ? "white" : "black";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      {/* This 300px tall container centers the horizontal scroll */}
      <View
        style={{
          height: 300,
          justifyContent: "center", // centers the ScrollView vertically
          alignItems: "center", // centers horizontally
          backgroundColor: "lightblue", // optional: makes the area visible
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            width: "100%",
            height: 120, // taller than before → looks better centered
          }}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingVertical: 20, // breathing room top & bottom
            gap: 16,
            flexDirection: "row",
            alignItems: "center", // centers buttons vertically in the row
            justifyContent: "center", // centers the group of buttons horizontally
          }}
        >
          {/* Removed alignSelf: "flex-end" from all buttons */}
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
          <Button text="not" style={{ backgroundColor: "yellow" }} />
        </ScrollView>
      </View>

      {/* Rest of the screen */}
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
          onPress={() => setTheme((prev) => !prev)}
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
          style={{
            height: 70,
            width: 70,
            alignSelf: "center",
            marginBottom: 10,
          }}
        />

        <Text
          style={{
            color: "red",
            fontSize: 40,
            backgroundColor: "white",
            fontWeight: "bold",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginBottom: 10,
            borderRadius: 10,
            alignSelf: "center",
          }}
        >
          hello
        </Text>

        <Text
          style={{
            color: "red",
            fontSize: 28,
            backgroundColor: "blue",
            fontWeight: "bold",
            paddingVertical: 8,
            paddingHorizontal: 25,
            borderRadius: 8,
            alignSelf: "center",
          }}
        >
          my name is
        </Text>

        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginTop: 20,
            backgroundColor: "white",
            paddingHorizontal: 20,
            borderRadius: 100,
            color: theme ? "black" : "#ddd",
          }}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
          placeholderTextColor={theme ? "#666" : "#aaa"}
          value={name}
        />

        <Pressable
          onPress={() => {
            const { height, width } = Dimensions.get("window");
            if (Platform.OS === "ios") {
              console.log("this is ios");
            } else if (Platform.OS === "android") {
              console.log("this is android");
            } else {
              console.log(`this is ${Platform.OS}`);
            }
            Alert.alert(
              "i was clicked",
              `you clicked me , i am an ${Platform.OS},\n widt is ${width}, \nheight is ${height}`,
            );

            setPressCount((prev) => prev + 1);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#e0e0e0" : "#f0f0f0",
              paddingVertical: 12,
              paddingHorizontal: 30,
              borderRadius: 12,
              marginVertical: 15,
              alignSelf: "flex-start",
            },
          ]}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
            click me! ({pressCount})
          </Text>
        </Pressable>

        <Button
          onPress={() => setCount((prev) => prev + 1)}
          text={`touch (${count})`}
          style={{ backgroundColor: "red", marginVertical: 10 }}
        />

        <Button
          text="not"
          style={{ alignSelf: "flex-end", backgroundColor: "yellow" }}
        />
        <Button text="my" style={{ backgroundColor: "blue" }} />
        <Button text="anointed" style={{ backgroundColor: "pink" }} />

        <Input type="default" label="Name" placeholder="your Fullname" />
        <Input type="email-address" label="Email" placeholder="Valid Email" />
        <Input type="number-pad" label="number" placeholder="Phone number" />
      </ScrollView>
    </View>
  );
}
