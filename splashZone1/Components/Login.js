import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';


    

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    

    const handleLogin = () => {
        if (email === '' || name === '') {
            Alert.alert('Error', 'Please fill in both fields');
            return;
        }

        navigation.navigate('Home', { name, email });
    };


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
                        value={name}
                        onChangeText={setName}
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
                <Button title="Login" onPress={handleLogin} style={styles.button}/>

                </View>
            <View style={styles.line}>
                <Text style={styles.continueText}>or continue with</Text>  
            </View>

            <View style={styles.socialImage}>
            <Image source={require("../assets/appleLogo.png")} style={styles.socialsImage}/>
            <Image source={require("../assets/googleLogo.png")} style={styles.socialImage}/>
            <Image source={require("../assets/facebook.png")} style={styles.socialImage}/>
            </View>


            <View>
                <Text style={styles.continueText}>Haven't an account?  <Text style={styles.RegisterText}>Register</Text></Text>
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
        flex:1,
        width: '100%',
       marginTop:70,
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
        color: '#356899',
    },
    welcome_sect: {
        marginBottom: 30,
    },
    heading_sec: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 10,
        
    },
    heading_third: {
        fontSize: 20,
        marginTop: 5,
        marginBottom:20,
        marginBottom: 10,
        color: '#BEBEBE',
       
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 0,
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
        backgroundColor: '#356899',
        color: 'white',
        marginTop: 20,
        padding: 18,
        borderRadius: 6,
        alignItems: 'center',
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: 20,
        
    },

   
    continueText:{
        color: '#555',
        textAlign: 'center',
        marginTop: 20
        
    },

    socialImage:{
        width:30,
        height:30,
        marginTop:10,
        flexDirection:'row',
        marginHorizontal: 30,
        alignItems: 'center'
    },
    socialsImage:{
        width:40,
        height:40,
        marginTop:10,
        flexDirection:'row',
        marginHorizontal: 30,
        alignItems: 'center'
    },

    RegisterText:{
        color: '#356899'
    }
});
