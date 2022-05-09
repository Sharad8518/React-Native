import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./assets/screen/Home"
import { StyleSheet, Text, View ,Pressable} from 'react-native';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>
<View  style={styles.container}>
     
    
      <Text style={styles.txt}>Gouri </Text>
      <Text style={styles.txt2}> Collection</Text>
      <Ionicons name="menu" size={24} color="black" style={styles.icon2}/>
     
  </View>


    <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="shop" component={ShopScreen} />
    </Tab.Navigator>
  </NavigationContainer>

  
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    height:30,
    marginTop:40,
    flexDirection:"row",
 
   
  },
txt:{
  marginTop:2,
  marginLeft:10,
  fontSize:20,
  fontWeight:"poppins",
  fontWeight:"800",
  color:"#f6e58d"
  
},
txt2:{
marginTop:7
},
icon:{
 marginLeft:10
},
icon2:{
marginRight:20,
marginLeft:180
}
});

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Text>sdfsdgsg</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function ShopScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
