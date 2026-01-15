import { TouchableOpacity, Text } from "react-native";   // ← also import Text

const Button = ({text}) => {   // ← better to name it with capital B (convention)
    return (
        <TouchableOpacity 
            style={{
                backgroundColor: "red",
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
                alignSelf:"center",
                height:40,
                width:100,
                 // Optional: nice shadow
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        shadowRadius: 3.84,
        elevation: 10
            }}
        >
            <Text style={{ color: "white", fontWeight: "bold" }}>
                {text}
            </Text>
        </TouchableOpacity> 
    );
};

export default Button;   // ← THIS LINE IS REQUIRED!