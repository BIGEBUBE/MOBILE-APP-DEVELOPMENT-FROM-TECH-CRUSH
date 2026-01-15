import {
  Alert,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Button from "../components/button.jsx";

//import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function index() {
  const insets = useSafeAreaInsets(); 
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: insets.top + 10,     
        paddingBottom: insets.bottom + 20,
        paddingHorizontal: 20,
        //paddingTop:50,
        //justifyContent: 'center',     
        //alignItems: 'center',         
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
        
          <Button text="touch"/>

    </View>
  );
}