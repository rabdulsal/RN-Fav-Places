import { View, StyleSheet, Alert, Text, Image } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../constants/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { getMapPreviewURL } from "../utils/location";
import React from "react";

export default function LocationPicker() {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [userLocation, setUserLocation] = React.useState(null);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permission = await requestPermission();
      return permission.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permssions to use this App."
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    const hasPermissions = await verifyPermissions();

    if (!hasPermissions) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setUserLocation({
      lat: location.coords.latitude,
      long: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {}

  var mapPreview = <Text>No Location Detected.</Text>;

  if (userLocation) {
    mapPreview = (
      <Image
        style={styles.mapImage}
        source={{ uri: getMapPreviewURL(userLocation.lat, userLocation.long) }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{mapPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton
          style={styles.actions}
          icon="map"
          onPress={pickOnMapHandler}
        >
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
