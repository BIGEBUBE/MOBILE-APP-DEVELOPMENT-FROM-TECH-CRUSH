  import { TouchableOpacity, Text } from "react-native";

const Button = ({ text, style, onPress }) => {  // ← ADD onPress here
  return (
    <TouchableOpacity
      onPress={onPress}   // ← PASS it to TouchableOpacity!
      style={{
        gap:50,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 40,
        width: 100,
        ...style,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        shadowRadius: 3.84,
        elevation: 10,
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;