import { View, Text, StyleSheet, FlatList } from 'react-native';
import { PlaceItem } from './PlaceItem';

export function PlacesList({ places }) {

    function renderPlace(placeData) {
        const place = placeData.item;

        if (!places || places.length === 0) {
            return (
                <View style={styles.noContentContainer}>
                    <Text style={styles.noContentText}>No Places added. Start adding some to see them here!</Text>
                </View>
            );
        }

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