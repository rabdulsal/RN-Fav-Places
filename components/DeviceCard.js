import { View, Text, StyleSheet } from 'react-native';

export default function DeviceCard({ device }) {


    return (
        <View style={styles.content}>
        <Text>{device.id}</Text>
        <Text>{device.name}</Text>
        <Text>{device.createdAt}</Text>
        <Text>{device.location}</Text>
        <Text>{device.type}</Text>
        <Text>{device.serialNumber}</Text>
      </View>
    )
};

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
      }
});