
import React from 'react';
import { View,Text,Image,TextInput } from 'react-native';

export default function inde(){
  return (

    <View style={{backgroundColor:"#f0f2f5",
      flex:1,paddingHorizontal:20
      
    }}>
      
      <Text style={{color:"blue",fontSize:20, textAlign:'center',margin:20}}> FACEBOOK </Text>
      <Image source={require('../assets/images/fblogo.png')}
       style={{width:100,height:100,alignSelf:'center',marginBottom:20}} />

      <Text style={{color:"black",fontSize:15,textAlign:'center'}}>LOG IN TO FACEBOOK </Text>

      <TextInput style={{backgroundColor:"white",color:"white",height:50,borderRadius:20,margin:10,paddingHorizontal:20,fontSize:15}} placeholder="EMAIL ADDRESS OR PHONE NUMBER" />
      <TextInput style={{backgroundColor:"white",color:"white",height:50,borderRadius:20,margin:10,paddingHorizontal:20,fontSize:15}} placeholder="PASSWORD" />
      <Text style={{backgroundColor:"blue",color:"white",paddingVertical:10,borderRadius:20,margin:10,fontSize:20,textAlign:"center",boxSizing:"border-box"}}>LOG IN</Text>
      <Text style={{color:"blue",fontSize:10, textAlign:'right',margin:1}}> FORGOT PASSWORD </Text>
    
     </View>
  );
}