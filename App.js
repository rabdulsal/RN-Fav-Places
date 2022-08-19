import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { useEffect, useState, useLayoutEffect } from 'react';
import { DeviceCard } from './components/DeviceCard';
import * as DeviceService from './services/device-service';

export default function App() {

  const [filteredDevices, setFilteredDevices] = useState([]); // NOTE: Use for setting & retrieving state-changing objects
  const [allDevices, setAllDevices] = useState([]);

  useEffect(() => { // Lifecycle hook best for fetching data
    async function getData() {
      const fetchedDevices = await DeviceService.fetchDevices();
      setAllDevices(fetchedDevices);
      setFilteredDevices(fetchedDevices);
    }
    getData();
    // DeviceService.makeNewDevice();
    // DeviceService.deleteDevice();
    // DeviceService.updateDevice();
    // DeviceService.deleteDevice();
    
  }, [])

  function searchName(name) {
    if (name !== "") {
      const searchDevices = allDevices.filter((device) => {
        return device.name.toLowerCase().includes(name.toLowerCase())
      });
      setFilteredDevices(searchDevices);
      return
    }
    setFilteredDevices(allDevices);
  }

  function renderDevice(deviceData) {
    const device = deviceData.item // 
    // console.log(device)
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
      <TextInput
        style={styles.textInput}
        placeholder='Search by Name'
          onChangeText={(inputText) => {
            searchName(inputText);
          }}
        />
      <FlatList
        data={filteredDevices}
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
  },
  textInput: {
    backgroundColor: '#fff',
    height: 50,
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: '#ddd',
    // borderRadius: 8
  }
});
