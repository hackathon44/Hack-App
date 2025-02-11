// src/screens/AuthScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, TextInput, HelperText } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Auth'>;
  route: RouteProp<RootStackParamList, 'Auth'>;
};

export default function AuthScreen({ navigation, route }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const mode = route.params?.mode || 'signin';

  const handleSubmit = () => {
    // Add your authentication logic here
    console.log('Submit:', { email, password, mode });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
        </Text>
        
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry={!isPasswordVisible}
          right={
            <TextInput.Icon 
              icon={isPasswordVisible ? 'eye-off' : 'eye'} 
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            />
          }
          style={styles.input}
        />

        <Button 
          mode="contained"
          onPress={handleSubmit}
          style={styles.submitButton}
        >
          {mode === 'signin' ? 'Sign In' : 'Create Account'}
        </Button>

        <Button 
          mode="text"
          onPress={() => navigation.navigate('Auth', { 
            mode: mode === 'signin' ? 'signup' : 'signin' 
          })}
          style={styles.switchButton}
        >
          {mode === 'signin' 
            ? "Don't have an account? Sign Up" 
            : "Already have an account? Sign In"}
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  submitButton: {
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 8,
    paddingVertical: 6,
  },
  switchButton: {
    marginTop: 10,
  },
});