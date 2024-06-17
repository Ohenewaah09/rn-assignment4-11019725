import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Cards from './Cards';


const Home = ({ route }) => {
  const { name, email } = route.params;
    return(
        <View style={styles.container}>
          <ScrollView>
          <View style={styles.profileContainer}>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}> {name}</Text>
              <Text style={styles.profileEmail}> {email}</Text>
            </View>
               
                <View>
                   <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.search_Text}>
                  <Image source={require('../assets/search.png')} style={styles.SearchImage} />
                  <TextInput placeholder='Search a job or position' placeholderTextColor={'#BEBEBE'} style={styles.TextInput}/>
                </View>
                <View>
                <Image source={require('../assets/Slider.png')} style={styles.SliderImage} />
                </View>
                </View>

                <View style={styles.jobSection}>
                  <Text style={styles.jobText}>Featured Jobs</Text>
                  <Text style={styles.allJobs}>See All </Text>
                </View>
                <Cards/>

                <View style={styles.jobSection}>
                  <Text style={styles.jobText}>Popular Jobs</Text>
                  <Text style={styles.allJobs}>See All </Text>
                </View>

          </ScrollView>
      <StatusBar style="auto" />
    </View>
    );
    
}

export default Home;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
    
    },
    profileImage:{
      width: 48,
      height:48,
      marginTop: 10,
      borderRadius:1000,

    },
    profileContainer:{
      marginVertical:60,
      flexDirection:'row',
      marginLeft: 25
    },
    profileInfo:{
      marginRight:20
    },
    profileName:{
      fontSize:26,
      fontWeight:'bold'
    },
    profileEmail:{
      fontSize:16,
      color: '#BEBEBE'
    },

    searchContainer:{
     flexDirection: 'row',
     marginLeft:30
    },
    search_Text:{
      padding:10,
      paddingLeft:20,
      paddingRight:20,
      backgroundColor:'#F2F2F3',
      flexDirection: 'row',
      borderRadius: 8
    } ,

    TextInput:{
      fontSize:16,
      textAlign:'center'
    },

      SearchImage:{
      height:23,
      width:28,
     },
  
     
     SliderImage:{
      height:30,
      width:35,
      borderRadius:6,
      padding:23,
      backgroundColor:'#F2F2F3',
      marginTop: 3,
      marginLeft:10
     },
     jobText:{
      fontWeight:'bold',
      fontSize: 18
     },
     allJobs:{
      fontSize: 12,
      color:'#BEBEBE'
     },
     jobSection:{
      flexDirection: 'row',
      justifyContent:'space-between',
      marginTop: 30,
      marginLeft:30,
      marginRight:30
     }
  });
  