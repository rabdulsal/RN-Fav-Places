import { StatusBar } from "expo-status-bar";
import DeviceListScreen from "./screens/DeviceListScreen";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlacesScreen from "./screens/AllPlacesScreen";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import IconButton from "./UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Colors } from "./constants/colors";

export default function App() {
  // const navigation = useNavigation(); <-- Only works once child component is rendered?
  const Stack = createNativeStackNavigator();

  function onPressHeaderRight(nav) {
    nav.navigate("AddPlace");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlacesScreen}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  color={tintColor}
                  size={24}
                  onPress={onPressHeaderRight.bind(this, navigation)}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlaceScreen}
            options={{ title: "Add a New Place" }}
          />
          <Stack.Screen name="DeviceList" component={DeviceListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
});
