import * as Networking from './utils/https';

export async function fetchDevices() {
    const response = await Networking.fetchData();
      // console.log(response.data)
    setDevices(response.data);
}

export async function makeNewDevice() {
    const deviceData = {
      createdAt: "2022-08-17T14:30:18Z",
      id: 1000,
      location: "f",
      name: "Rashad_New_Device",
      serialNumber: "abcd1234efg5678",
      type: "a"
    }
    const response = await Networking.addDevice(deviceData);
    console.log(response);
  }

  export async function updateDevice() {
    const newData = { 
      id: 1000,
      location: "zed",
      name: "Jessica_New_Device",
      serialNumber: "abcd1234efg5678",
      type: "r-type"
    };
    const response = await Networking.updateDevice(id,newData);
    console.log(response);
  }

  export async function deleteDevice() {
    const id = 1000;
    const newID = 565;
    const response = await Networking.deleteDevice(newID);
    console.log(response);
  }

  export async function getDevice(deviceID) {
    const id = 1000;
    const newID = 565;
    const response = await Networking.fetchDevice(deviceID);
    console.log(response);
  }
