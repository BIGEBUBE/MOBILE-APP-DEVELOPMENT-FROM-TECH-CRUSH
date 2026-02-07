import { TextInput, View, StyleSheet, Text } from "react-native";

const Input = ({ placeholder, style, label,type }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
            keyboardType={type}
                placeholder={placeholder}
                style={
                    {backgroundColor:"white",
                        // gap:50,
                        /*  color:"white",
                       backgroundColor: "forestgreen",
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
                       elevation: 10,*/
                    }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 10,
        marginBottom: 12, // space between inputs
    },
    label: {
        color: "white",
        fontSize: 15,
        marginBottom: 6,
    },
});

export default Input;
