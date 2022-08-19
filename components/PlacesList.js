import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlaceItem from './PlaceItem';

export default function PlacesList({ places }) {

    if (!places || places.length === 0) {
        return (
            <View style={styles.noContentContainer}>
                <Text style={styles.noContentText}>No Places added. Start adding some to see them here!</Text>
            </View>
        );
    }
    
    function renderPlace(placeData) {
        console.log("Render Place fired.")
        console.log(placeData)

        const place = placeData.item;

        return (
            <PlaceItem
                place={place}
            />
        );
    }

    return (
        <View>
            <FlatList
                data={places}
                keyExtractor={(item) => item.id}
                renderItem={renderPlace}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    noContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noContentText: {
        fontSize: 16
    }
});