
import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native';

const quotes = require('./assets/quotes.json');

export default function App() {
  const [day, setDay] = useState(1);

  const nextDay = () => {
    if (day < 150) setDay(day + 1);
  };

  const quote = quotes[day - 1];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('./assets/police.png')} style={styles.image} />
      <Text style={styles.header}>Day {day}/150</Text>
      <Text style={styles.quote}>{quote}</Text>
      <TouchableOpacity onPress={nextDay} style={styles.button}>
        <Text style={styles.buttonText}>Next Day</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', alignItems: 'center', justifyContent: 'center', padding: 20 },
  header: { fontSize: 28, color: '#FFD700', fontWeight: 'bold', marginBottom: 20 },
  quote: { fontSize: 20, color: 'white', textAlign: 'center', marginBottom: 40 },
  button: { backgroundColor: '#FFD700', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10 },
  buttonText: { color: '#111', fontSize: 18, fontWeight: 'bold' },
  image: { width: 120, height: 120, marginBottom: 30 }
});
