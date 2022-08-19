import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function PlaceItem({ place, onPress }) {


    return (
        <Pressable onPress={onPress}>
            <Image source={place.imageUri} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

});