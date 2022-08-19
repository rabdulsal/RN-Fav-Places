import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState, useLayoutEffect } from 'react';
import { DeviceCard } from './components/DeviceCard';
import * as DeviceService from './services/device-service';

export default function App() {

  const [devices, setDevices] = useState([]); // NOTE: Use for setting & retrieving state-changing objects

  useEffect(() => { // Lifecycle hook best for fetching data
    async function getData() {
      
    }
    // DeviceService.getData();
    // DeviceService.makeNewDevice();
    // DeviceService.deleteDevice();
    // DeviceService.updateDevice();
    // DeviceService.deleteDevice();
    DeviceService.getDevice(1);
  }, [])

  

  function renderDevice(deviceData) {
    const device = deviceData.item // 
    // console.log(item)
    // const deviceProps = {
    //   id: device.id,
    //   name: device.name,
    //   createdAt: device.createdAt,
    //   location: device.location,
    //   type: device.type,
    //   serialNumber: device.serialNumber
    // }

    return (
      <DeviceCard 
        device={device}
      />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={devices}
        keyExtractor={(item, index) => item.id} // 'item' & 'index' are standard RN obj's
        renderItem={(renderDevice)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    
  },
  content: {
    // alignItems: 'center',
    margin: 10,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 10
    // justifyContent: 'center',
  }
});
