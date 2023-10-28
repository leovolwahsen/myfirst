import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello User!</Text>
      <Text >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38454C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 54,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#fff',
  },
});
