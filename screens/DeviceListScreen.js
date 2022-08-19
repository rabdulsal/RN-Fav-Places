import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { useEffect, useState, useLayoutEffect } from 'react';
import DeviceCard from '../components/DeviceCard';
import * as DeviceService from '../services/device-service';

export default function DeviceListScreen() {

    // NOTE: Use for setting & retrieving state-changing objects
  const [filteredDevices, setFilteredDevices] = useState([]); // Array to represent/display the changing list of filtered devices
  const [allDevices, setAllDevices] = useState([]); // Array to represent all available devices for searching

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
    
  }, [] /* <-- Place object here to selectively trigger UI updates */ )

  function searchName(searchTerm) {
    // NOTE: Bug where entering '2' letters paints 2 SearchBars and Lists onto screen
    if (searchTerm !== "") {
      const searchDevices = allDevices.filter((device) => {
        return device.name.toLowerCase().includes(searchTerm.toLowerCase()) || device.location.toLowerCase().includes(searchTerm.toLowerCase())
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
    <View>
        <TextInput
            style={styles.textInput}
            placeholder='Search by Name or Location'
            onChangeText={(inputText) => {
                searchName(inputText);
            }}
            />
        <View style={styles.deviceCountContainer}>
            <Text style={styles.deviceCountTitle}>Total Devices:</Text>
            <Text style={styles.deviceCount}>{filteredDevices.length}</Text>
        </View>
        <FlatList
            data={filteredDevices}
            keyExtractor={(item, index) => item.id} // 'item' & 'index' are standard RN obj's
            renderItem={(renderDevice)}
        />
    </View>
  );


}


const styles = StyleSheet.create({
    
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
    },
    deviceCountContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    deviceCountTitle: {
        fontSize: 12,
        color: '#aaa',
        fontWeight: 'bold'
    },
    deviceCount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 8,
    }
  });
  