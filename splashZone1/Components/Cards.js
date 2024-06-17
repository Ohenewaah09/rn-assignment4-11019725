import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import React from 'react';

const data = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '2', title: 'Jr. Executive', company: 'Google', salary: '$16,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '3', title: 'Jr. Executive', company: 'Apple', salary: '$12,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '4', title: 'Product Manager', company: 'Amazon', salary: '$30,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '5', title: 'Software Engineer', company: 'Ali Express', salary: '$15,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '6', title: 'Product Manager', company: 'Jumia', salary: '$10,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '7', title: 'Software Engineer', company: 'Bolt', salary: '$28,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '8', title: 'Jr. Executive', company: 'Wattpad', salary: '$19,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') }
];

const Card = ({ title, company, salary, location, image }) => (
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <Image source={image} style={styles.socialImage}/>
            <View style={styles.JobInfo}>
                <Text>{title}</Text>
                <Text>{company}</Text>
            </View>
        </View>
        <View style={styles.CardInfo}>
            <Text>{salary}</Text>
            <Text>{location}</Text>
        </View>
    </View>
);

export default function Cards() {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card 
                        title={item.title} 
                        company={item.company} 
                        salary={item.salary} 
                        location={item.location} 
                        image={item.image}
                    />
                )}
                keyExtractor={item => item.id}
                horizontal={true}
                contentContainerStyle={styles.flatListContainer}
                showsHorizontalScrollIndicator={false}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flatListContainer: {
        padding: 20,
    },
    socialImage: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    card: {
        flexDirection: 'row',
        marginTop: 2,
        marginBottom: 20,
    },
    CardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    cardContainer: {
        padding: 20,
        backgroundColor: '#3E8EDE',
        borderRadius: 16,
        marginBottom: 20,
    },
    JobInfo: {
        justifyContent: 'center',
    },
});
