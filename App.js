import { StatusBar } from 'expo-status-bar';
import DeviceListScreen from './screens/DeviceListScreen';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlacesScreen from './screens/AllPlacesScreen';
import AddPlaceScreen from './screens/AddPlaceScreen';
import IconButton from './UI/IconButton';

export default function App() {

  const Stack = createNativeStackNavigator();

  function onPressHeaderRight(navigation) {
    navigation.navigate("AddPlace")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="AllPlacesScreen" 
            component={AllPlacesScreen} 
            options={({navigation}) => ({
              headerRight: ({tintColor}) => (
                <IconButton 
                  icon="add" 
                  color={tintColor} 
                  size={24} 
                  onPress={onPressHeaderRight}
                />
              ),
            })} 
          />
          {/* <Stack.Screen 
            name="AllPlacesScreen" 
            component={AllPlacesScreen} 
           /> */}
          <Stack.Screen name="AddPlaceScreen" component={AddPlaceScreen} />
          {/* <Stack.Screen name="DeviceList" component={DeviceListScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    
  },
});

