import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const handleLogin = () => {
    // Add your login handling code here
};

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.Status_Bar}>
                <Text style={styles.heading_first}>Jobizz</Text>
                <View style={styles.welcome_sect}>
                    <Text style={styles.heading_sec}>Welcome Back <Image source={require("../assets/wave.jpeg")} style={styles.waveImage} /></Text>
                    <Text style={styles.heading_third}>Let's Log in. Apply to jobs!</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Name'
                        value={password}
                        onChangeText={setPassword}
                        style={styles.Input}
                    />
                    <TextInput
                        placeholder='E-mail'
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        style={styles.Input}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Status_Bar: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    waveImage: {
        width: 20,
        height: 20,
    },
    heading_first: {
        marginTop: 50,
        fontSize: 34,
        fontWeight: 'bold',
        color: '#1c4966',
        textAlign: 'center',
    },
    welcome_sect: {
        alignItems: 'center',
        marginBottom: 30,
    },
    heading_sec: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    heading_third: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        color: '#BEBEBE',
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    Input: {
        borderColor: '#BEBEBE',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 6,
        padding: 15,
        width: '100%',
    },
    button: {
        backgroundColor: '#1c4966',
        color: 'white',
        marginTop: 20,
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
