import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.brand}>AutomotiveXperts</Text>
        <Text style={styles.subtitle}>Kfz-Sachverständigen App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>Willkommen</Text>
        <Text style={styles.description}>
          Schäden dokumentieren, Fahrzeuge erfassen und Gutachten vorbereiten.
        </Text>

        <TouchableOpacity style={styles.primary}>
          <Text style={styles.primaryText}>Neues Gutachten</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondary}>
          <Text style={styles.secondaryText}>Fahrzeuge</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondary}>
          <Text style={styles.secondaryText}>Gutachten</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>AutomotiveXperts • Mobile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101318' },
  header: { paddingHorizontal: 24, paddingTop: 36, paddingBottom: 28 },
  brand: { color: '#FFFFFF', fontSize: 30, fontWeight: '800' },
  subtitle: { color: '#AEB6C2', fontSize: 15, marginTop: 5 },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  welcome: { color: '#FFFFFF', fontSize: 28, fontWeight: '700' },
  description: { color: '#C7CDD6', fontSize: 16, lineHeight: 23, marginTop: 10, marginBottom: 30 },
  primary: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 14, alignItems: 'center', marginBottom: 12 },
  primaryText: { color: '#101318', fontSize: 17, fontWeight: '700' },
  secondary: { borderWidth: 1, borderColor: '#3B424D', padding: 17, borderRadius: 14, alignItems: 'center', marginBottom: 12 },
  secondaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  footer: { color: '#727B88', textAlign: 'center', paddingBottom: 18 }
});
