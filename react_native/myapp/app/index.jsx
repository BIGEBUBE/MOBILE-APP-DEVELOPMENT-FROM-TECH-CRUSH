import {
  Alert,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

//import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Hello() {
  const insets = useSafeAreaInsets(); 
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
         paddingTop: insets.top + 10,      // ← respect status bar / notch + extra space
        paddingBottom: insets.bottom + 20, // ← respect home indicator / navigation bar
        paddingHorizontal: 20,
        //paddingTop:50,
        //justifyContent: 'center',      // keeps text vertically centered
        //alignItems: 'center',          // centers text horizontally (optional but recommended)
        paddingHorizontal: 20,
      }}
    >

        <Image 
        source={require("../assets/images/icon.png")} 
        style={{height:70,width:70, alignSelf:"center",marginBottom:10 }} />
      <Text
        style={{
          color: 'red',
          fontSize: 40,
          backgroundColor: 'white',
          fontWeight: 'bold',          
          paddingVertical: 10,
          paddingHorizontal: 20,        // better spacing
          marginBottom: 10,             // space between the two texts
          borderRadius: 10,             // nice rounded corners (optional)
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
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop:20,
          backgroundColor:"white",
          paddingHorizontal:20,
          borderRadius:100
        }}
        placeholder="Enter your name"
        />

        <Pressable>
           <Text>click me!</Text>
           </Pressable>

          <TouchableOpacity
           onPress={()=>Alert.alert("i was clicked")}
         // onPress={()=>console.log("i was clicked")}
           style={{textcolor:"blue",
            fontWeight:"bold",
            backgroundColor:"white",
            height:30,width:100,
            marginTop:10,justifyContent:"center",
            alignItems:"center",
            alignSelf:"center",
            borderRadius:5}}>
            <Text>hello clic here!</Text>
            </TouchableOpacity>
        


    </View>
  );
}