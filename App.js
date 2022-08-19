import { StatusBar } from 'expo-status-bar';
import { DeviceListScreen } from './screens/DeviceListScreen';
import { StyleSheet, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DeviceListScreen />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    
  },
});

