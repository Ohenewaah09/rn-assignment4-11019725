import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import React from 'react';

const data = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$18,000/y', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '2', title: 'Jr. Executive', company: 'Google', salary: '$18,000/y', location: 'Accra, Ghana', image: require('../assets/googleLogo.png') },
    { id: '3', title: 'Sales Manager', company: 'Apple', salary: '$18,000/y', location: 'Accra, Ghana', image: require('../assets/appleLogo.png') },
    { id: '4', title: 'Software Engineer', company: 'Amazon', salary: '$18,000/y', location: 'Accra, Ghana', image: require('../assets/Amazon.png') },
    { id: '5', title: 'Procurement Manager', company: 'KFC', salary: '$18,000/y', location: 'Accra, Ghana', image: require('../assets/KFC.png') },
    { id: '6', title: 'Product Manager', company: 'Pinterest', salary: '$18,000/y', location: 'Accra, Ghana', image: require('../assets/pinterest.jpeg') },
    { id: '7', title: 'Product Manager', company: 'beats', salary: '$18,000/y', location: 'Accra, Ghana', image: require('../assets/beats.png') },
    { id: '8', title: 'Sales Manager', company: 'Burger King', salary: '$18,000/y', location: 'Accra, Ghana', image: require('../assets/burgerKing.png') },
];

const Card = ({ title, company, salary, location, image }) => (
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <Image source={image} style={styles.socialImage} />
            <View style={styles.jobInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.salary}>{salary}</Text>
            </View>
        </View>
        <View style={styles.cardInfo}>
            
            <Text style={styles.company}>{company}</Text>
            <Text style={styles.location}>{location}</Text>
            
        </View>
    </View>
);

export default function PoularJobs() {
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
                contentContainerStyle={styles.flatListContainer}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    flatListContainer: {
        padding: 20,
    },
    socialImage: {
        width: 30,
        height: 30,
        marginRight: 10,

    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardContainer: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 20,
    },
    jobInfo: {
        flexDirection:'row',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginRight:30,
    },
    company: {
        fontSize: 14,
        color: '#BEBEBE',
    },
    cardInfo: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        color:'#BEBEBE'
    },
    salary: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginLeft:30
    },
    location: {
        fontSize: 14,
        color: '#BEBEBE',
        marginLeft:30
    },
});
