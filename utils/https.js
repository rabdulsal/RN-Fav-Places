import axios from "axios";

const BASE_URL = "https://mockend.com/learningmachine00/testAPI/Device";
// Alternately use: https://dummyapi.io/

export async function fetchDevices() {
  return await axios.get(BASE_URL);
}

export async function fetchDevice(deviceID) {
  return await axios.get(BASE_URL + `/${deviceID}`);
}

export async function addDevice(deviceData) {
  return await axios.post(BASE_URL, deviceData);
}

export async function updateDevice(deviceID, newData) {
  return await axios.put(BASE_URL + `/${deviceID}`, newData);
}

export async function deleteDevice(deviceID) {
  return await axios.delete(BASE_URL + `/${deviceID}`);
}

/*
Do following:
1. Add new item
    - name,
     - serial number
    - location
    - device type
        - timestamp
 2. Delete item
 3. Update item
 4. Dashboard
    - show categories(switch, router, cable modem...) and total number of devices.
        * use native array-filter functionality to filter by static device-types
    - search by name, location,
        * use Redux from above to filter by 'name', 'location' etc.
        - scan barcode find devices info
            * use 'bar-code-scanner' API to pull a 'name' or 'serialNumber', then filter/search as above
REST Endpoints:
GET https://mockend.com/learningmachine00/testAPI/Device
GET https://mockend.com/learningmachine00/testAPI/Device/<id>
POST   https://mockend.com/learningmachine00/testAPI/Device
DELETE https://mockend.com/learningmachine00/testAPI/Device/<id>

** Additions **
- Button to launch modal with form to Add New Device
- Button for each DeviceCard to delete/edit entry
- Loading spinner?
- Headers/NavBars and Navigation to to different screens like Camera-scan
    - DeviceDetails page

** Separate knowledge questions:
- passing styles in array
- difference btw 'const' and 'let'
- difference btw 'export' and 'export default'
*/
