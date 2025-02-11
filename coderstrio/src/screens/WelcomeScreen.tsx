// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Define the props type for our component
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

export default function WelcomeScreen({ navigation }: Props) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text variant="displayMedium" style={styles.title}>
          Welcome to AppName
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Your one-stop solution for everything you need
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained"
          onPress={() => navigation.navigate('Auth', { mode: 'signin' })}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Sign In
        </Button>
        
        <Button 
          mode="outlined"
          onPress={() => navigation.navigate('Auth', { mode: 'signup' })}
          style={[styles.button, styles.secondaryButton]}
          contentStyle={styles.buttonContent}
        >
          Create Account
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 40,
  },
  button: {
    marginBottom: 15,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  secondaryButton: {
    borderWidth: 2,
  },
});