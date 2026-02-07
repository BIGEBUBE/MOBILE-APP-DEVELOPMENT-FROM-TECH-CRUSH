import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function Index() {
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('light');

  const backgroundColor = theme === 'light' ? 'green' : 'black';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        paddingHorizontal: 20,
      }}
    >
      {/* Quick theme toggle button */}
      <TouchableOpacity
        onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          alignSelf: 'flex-end',
          marginTop: 20,
          padding: 12,
          backgroundColor: '#333',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 50,
          color: 'red',
          fontWeight: '900',
          textAlign: 'center',
          marginTop: 40,
        }}
      >
        Hello world!
      </Text>

      <Text
        style={{
          fontSize: 24,
          color: 'white',
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        My name is michaeL
      </Text>

      <TextInput
        style={{
          backgroundColor: 'white',
          height: 50,
          borderRadius: 20,
          paddingHorizontal: 20,
          marginTop: 30,
          fontSize: 18,
        }}
        placeholder="Enter email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Example colored buttons */}
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Enter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 15,
          borderRadius: 10,
          marginTop: 12,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Click me</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}