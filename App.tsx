import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import LoginScreen from './src/screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userId, setUserId] = useState<string | null>(null);

  if (!userId) {
    return (
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <LoginScreen onLoginSuccess={(id) => setUserId(id)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
